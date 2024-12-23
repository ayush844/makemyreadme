import { addTemplate } from "@/app/actions/addTemplate";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { title, content, preview_picture } = req.body;

	if (!title || !content || !preview_picture) {
		return res.status(400).json({
			success: false,
			message: "Title, content and picture are required",
		});
	}

	const result = await addTemplate(title, content, preview_picture);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
