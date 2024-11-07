import { updateTemplate } from "@/app/actions/updateTemplate";

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { id, title, content, preview_picture } = req.body;

	if (!id || !title || !content) {
		return res
			.status(400)
			.json({ success: false, message: "ID, title, and content are required" });
	}

	const result = await updateTemplate(id, title, content, preview_picture);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
