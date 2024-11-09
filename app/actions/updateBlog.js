import connectDB from "@/config/database";
import Blog from "@/models/blog";

export async function updateBlog(id, title, content, picture) {
	await connectDB();
	try {
		await Blog.updateOne({ _id: id }, { title, content, picture });
		return { success: true, message: "Blog updated successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
