import { Schema, model, models } from "mongoose";

const BlogSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			maxlength: 100,
		},
		content: {
			type: String,
			required: true,
		},
		picture: {
			type: String,
			trim: true,
			required: true,
		},
	},
	{ timestamps: true }
);

const Blog = models.Blog || model("Blog", BlogSchema);

export default Blog;
