import { updateBlog } from "@/app/actions/updateBlog";

export default async function handler(req, res) {
	if (req.method !== "PUT") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { title, content, picture, id } = req.body;

	if (!id || !title || !content || !picture) {
		return res.status(400).json({
			success: false,
			message: "ID,Title, content and picture are required",
		});
	}

	const result = await updateBlog(id, title, content, picture);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
