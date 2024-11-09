import { updateComponent } from "@/app/actions/updateComponent";

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { id, title, content, group_type } = req.body;

	if (!id || !title || !content || !group_type) {
		return res.status(400).json({
			success: false,
			message: "ID, title, content and group_type are required",
		});
	}

	const result = await updateComponent(id, title, content, group_type);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
