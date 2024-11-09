import { deleteComponent } from "@/app/actions/deleteComponent";

export default async function handler(req, res) {
	if (req.method !== "DELETE") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { title } = req.body;

	if (!title) {
		return res
			.status(400)
			.json({ success: false, message: "title is required" });
	}

	const result = await deleteComponent(title);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
