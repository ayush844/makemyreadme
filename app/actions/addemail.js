import connectDB from "@/config/database";
import User from "@/models/user";
import { sendOTP } from "@/utils/emailService";

export async function addEmail(email) {
	await connectDB();

	try {
		const emailRegex =
			/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|icloud\.com|hotmail\.com)$/;
		if (!emailRegex.test(email)) {
			throw new Error("Invalid email format");
		}
		const OTP = Math.floor(100000 + Math.random() * 900000);
		await User.create({ email, OTP });
		await sendOTP(email, OTP);

		return { success: true, message: "Email sent successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
