import { toast } from "react-toastify";

export const handleUpload = async (event, setUrl, setMarkdown, markdown) => {
  const MAX_FILE_SIZE = 3 * 1024 * 1024;
  const file = event.target.files[0];

  if (!file) {
    toast.error("No file selected. Please upload an image.");
    return false;
  }

  // Validate file type
  const validImageTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
  ];
  if (!validImageTypes.includes(file.type)) {
    toast.error(
      "Invalid file type. Please upload an image (jpg, png, gif, webp)."
    );
    return false;
  }

  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    toast.error("File size exceeds 3 MB. Please upload a smaller image.");
    return false;
  }

  toast.info(
    "Image upload started! It will be available soon. Remember, the image will be removed from our server after 3 hours or when you click Copy or Export button.(As it is just for your preview.)",
    { autoClose: false }
  );

  // Use Promise to handle asynchronous FileReader
  const readFileAsBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => reject(new Error("File reading failed."));
    });

  try {
    const base64data = await readFileAsBase64(file);

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
      setMarkdown(markdown + `\n\n![Uploaded Image](${data.url})`);
      toast.success("Image uploaded successfully!");
      return true;
    } else {
      toast.error("Failed to upload image. Please try again.");
      return false;
    }
  } catch (error) {
    console.error("Image upload failed:", error);
    toast.error(
      "Image upload failed. Please try again or check the file type."
    );
    return false;
  }
};
