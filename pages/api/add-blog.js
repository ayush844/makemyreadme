import { addBlog } from "@/app/actions/addBlog";

export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res
			.status(405)
			.json({ success: false, message: "Method not allowed" });
	}

	const { title, content, picture } = req.body;

	if (!title || !content || !picture) {
		return res.status(400).json({
			success: false,
			message: "Title, content and picture are required",
		});
	}

	const result = await addBlog(title, content, picture);

	if (result.success) {
		return res.status(200).json(result);
	} else {
		return res.status(400).json(result);
	}
}
