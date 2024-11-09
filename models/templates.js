import { Schema, model, models } from "mongoose";

const TemplateSchema = new Schema(
	{
		preview_picture: {
			type: String,
			trim: true,
		},
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
	},
	{ timestamps: true }
);

const Template = models.Template || model("Template", TemplateSchema);

export default Template;
