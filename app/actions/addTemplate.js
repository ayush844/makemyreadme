import connectDB from "@/config/database";
import Template from "@/models/templates";

export async function addTemplate(title, content, preview_picture) {
	await connectDB();
	try {
		await Template.create({ title, content, preview_picture });
		return { success: true, message: "Template added successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
