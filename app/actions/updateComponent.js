import connectDB from "@/config/database";
import Component from "@/models/component";

export async function updateComponent(id, title, content, group_type) {
	await connectDB();
	try {
		await Component.updateOne({ _id: id }, { title, content, group_type });
		return { success: true, message: "Component updated successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
