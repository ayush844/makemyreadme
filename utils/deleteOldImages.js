import cloudinary from "./cloudinary";

async function deleteOldImages() {
	const oneDayInMs = 3 * 60 * 60 * 1000;
	const now = new Date();

	try {
		let result = await cloudinary.api.resources({
			type: "upload",
			resource_type: "image",
			max_results: 100,
		});

		for (const resource of result.resources) {
			const createdAt = new Date(resource.created_at);
			const imageAge = now - createdAt;
			if (imageAge > oneDayInMs) {
				try {
					await cloudinary.uploader.destroy(resource.public_id);
					console.log(
						`Deleted image ${resource.public_id} as it was older than 1 day.`
					);
				} catch (error) {
					console.error(`Failed to delete image ${resource.public_id}:`, error);
				}
			}
		}
	} catch (error) {
		console.error("Failed to list images from Cloudinary:", error);
	}
}

export default deleteOldImages;
