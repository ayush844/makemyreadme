import cloudinary from "@/utils/cloudinary";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const fileStr = req.body.data;
		try {
			const uploadResponse = await cloudinary.uploader.upload(fileStr, {
				upload_preset: "unsigned_preset",
			});
			res.status(200).json({ url: uploadResponse.secure_url });
		} catch (error) {
			console.error("Cloudinary upload error:", error);
			res.status(500).json({ error: "Image upload failed" });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
}
