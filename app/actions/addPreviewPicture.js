import connectDB from "@/config/database";
import Template from "@/models/templates";

export async function addPreviewPicture(id, preview_picture) {
	await connectDB();
	try {
		await Template.updateOne({ _id: id }, { preview_picture });
		return { success: true, message: "Preview picture added successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
