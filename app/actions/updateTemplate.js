import connectDB from "@/config/database";
import Template from "@/models/templates";

export async function updateTemplate(
	id,
	title,
	content,
	preview_picture
) {
	await connectDB();
	try {
		await Template.updateOne({ _id: id }, { title, content, preview_picture });
		return { success: true, message: "Template updated successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
