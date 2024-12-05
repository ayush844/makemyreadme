export const handleUpload = async (event, setUrl, setMarkdown, markdown) => {
	const MAX_FILE_SIZE = 3 * 1024 * 1024;
	const file = event.target.files[0];
	if (file.size > MAX_FILE_SIZE) {
		alert("File size exceeds 3 MB. Please upload a smaller image.");
		return;
	}
	const reader = new FileReader();

	reader.readAsDataURL(file);
	reader.onloadend = async () => {
		const base64data = reader.result;

		try {
			const response = await fetch("/api/upload-Image", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ data: base64data }),
			});

			const data = await response.json();
			if (data.url) {
				setUrl((prevUrl) => [...prevUrl, data.url]);
				setMarkdown(markdown + "\n\n" + "![Uploaded Image](" + data.url + ")");
				return true;
			}
			return false;
		} catch (error) {
			console.error("Image upload failed:", error);
		}
	};
};
