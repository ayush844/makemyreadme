import connectDB from "@/config/database";
import User from "@/models/user";

export async function addEmail(email) {
	await connectDB();

	try {
		const emailRegex =
			/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|icloud\.com|hotmail\.com)$/;
		if (!emailRegex.test(email)) {
			throw new Error("Invalid email format");
		}

		await User.create({ email });
		return { success: true, message: "Email added successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
