export const handleDelete = async (url) => {
	try {
		const response = await fetch("/api/delete-Image", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ urls: url }),
		});

		if (response.ok) {
			const result = await response.json();
			console.log(result.message);
		} else {
			const error = await response.json();
			console.error("Delete error:", error.error);
		}
	} catch (error) {
		console.error("Failed to delete image:", error);
	}
};
