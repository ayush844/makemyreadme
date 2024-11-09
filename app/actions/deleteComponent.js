import connectDB from "@/config/database";
import Component from "@/models/component";

export async function deleteComponent(title) {
	await connectDB();
	try {
		await Component.deleteOne({ title });
		return { success: true, message: "Component deleted successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
