import connectDB from "@/config/database";
import User from "@/models/user";
import { sendOTP } from "@/utils/emailService";

export async function resendOTP(email) {
	await connectDB();
	try {
		const OTP = Math.floor(100000 + Math.random() * 900000);
		await sendOTP(email, OTP);
		await User.updateOne({ email }, { $set: { OTP } });
		return { success: true, message: "OTP resent successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
