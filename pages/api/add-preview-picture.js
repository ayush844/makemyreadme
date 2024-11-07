import { addPreviewPicture } from "@/app/actions/addPreviewPicture";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { id, preview_picture } = req.body;

	if (!id || !preview_picture) {
		return res
			.status(400)
			.json({ success: false, message: "ID and preview picture are required" });
	}

	const result = await addPreviewPicture(id, preview_picture);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
