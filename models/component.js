import { Schema, model, models } from "mongoose";

const ComponentSchema = new Schema(
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
		group_type: {
			type: String,
			enum: ["paragraph", "heading", "list", "code", "quote", "table", "link"],
			required: true,
		},
	},
	{ timestamps: true }
);

const Component = models.Component || model("Component", ComponentSchema);

export default Component;
