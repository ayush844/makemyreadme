import cloudinary from "@/utils/cloudinary";
import extractPublicId from "@/utils/extractPublicId";

export default async function handler(req, res) {
	if (req.method === "DELETE") {
		const { urls } = req.body;

		if (!urls || !Array.isArray(urls) || urls.length === 0) {
			return res
				.status(400)
				.json({ error: "An array of image urls is required" });
		}

		try {
			const deleteResults = await Promise.all(
				urls.map(async (public_id) => {
					try {
						public_id = extractPublicId(public_id);
						await cloudinary.uploader.destroy(public_id);
						return { public_id, status: "deleted" };
					} catch (error) {
						console.error(`Failed to delete image ${public_id}:`, error);
						return { public_id, status: "failed", error: error.message };
					}
				})
			);

			const failedDeletions = deleteResults.filter(
				(result) => result.status === "failed"
			);

			if (failedDeletions.length > 0) {
				res.status(500).json({
					message: "Some images failed to delete",
					results: deleteResults,
				});
			} else {
				res.status(200).json({
					message: "All images deleted successfully",
					results: deleteResults,
				});
			}
		} catch (error) {
			console.error("Cloudinary delete error:", error);
			res.status(500).json({ error: "Failed to delete images" });
		}
	} else {
		res.status(405).json({ error: "Method not allowed" });
	}
}
