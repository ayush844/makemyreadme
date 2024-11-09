import connectDB from "@/config/database";
import Blog from "@/models/blog";

export async function addBlog(title, content, picture) {
	await connectDB();
	try {
		await Blog.create({ title, content, picture });
		return { success: true, message: "Blog added successfully" };
	} catch (error) {
		return { success: false, message: error.message };
	}
}
