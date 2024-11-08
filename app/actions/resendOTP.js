import connectDB from "@/config/database";
import User from "@/models/user";
import { sendOTP } from "@/utils/emailService";

export async function resendOTP(email) {
	await connectDB();
	try {
		const user = await User.findOne({ email });
		if (!user) {
			throw new Error("User not found");
		}
		await sendOTP(email, user.OTP);
		return { success: true, message: "OTP resent successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
