import connectDB from "@/config/database";
import User from "@/models/user";

export async function checkOTP(email, OTP) {
	await connectDB();
	try {
		const user = await User.findOne({ email });
		if (!user) {
			throw new Error("User not found");
		}
		if (user.OTP !== OTP) {
			throw new Error("Invalid OTP");
		}

		await User.updateOne({ email }, { verified: true });
		return { success: true, message: "OTP verified successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
