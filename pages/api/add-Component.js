import { addComponent } from "@/app/actions/addComponent";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { title, content, group_type } = req.body;

	if (!title || !content || !group_type) {
		return res.status(400).json({
			success: false,
			message: "Title, content and group_type are required",
		});
	}

	const result = await addComponent(title, content, group_type);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
