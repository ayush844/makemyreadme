import { checkOTP } from "@/app/actions/checkOTP";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { email, OTP } = req.body;

	if (!email || !OTP) {
		return res
			.status(400)
			.json({ success: false, message: "Email and OTP are required" });
	}

	const result = await checkOTP(email, OTP);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
