import connectDB from "@/config/database";
import Template from "@/models/templates";

export async function addTemplate(title, content) {
	await connectDB();
	try {
		await Template.create({ title, content });
		return { success: true, message: "Template added successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
