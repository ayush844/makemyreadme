import connectDB from "@/config/database";
import Component from "@/models/component";

export async function addComponent(title, content, group_type) {
	await connectDB();
	try {
		await Component.create({ title, content, group_type });
		return { success: true, message: "Component added successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
