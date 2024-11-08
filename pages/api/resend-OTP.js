import { resendOTP } from "@/app/actions/resendOTP";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { email } = req.body;

	if (!email) {
		return res
			.status(400)
			.json({ success: false, message: "Email is required" });
	}

	const result = await resendOTP(email);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
