function extractPublicId(url) {
	// Expected URL pattern:
	// https://res.cloudinary.com/{cloud_name}/image/upload/{version}/{public_id}.{extension}
	const regex =
		/https:\/\/res\.cloudinary\.com\/[^/]+\/image\/upload\/(?:v\d+\/)?([^/.]+)\.\w+$/;
	const matches = url.match(regex);

	if (matches && matches[1]) {
		return matches[1];
	} else {
		console.error("Invalid Cloudinary URL format.");
		return null;
	}
}

export default extractPublicId;
