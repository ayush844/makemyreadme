import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

export const sendOTP = async (toEmail, otp) => {
	const mailOptions = {
		from: {
			name: "Make My Readme",
			address: process.env.EMAIL_USER,
		},
		to: toEmail,
		subject: "Make My Readme OTP Code",
		text: `Your OTP code is ${otp}`,
		html: `
             <div style="font-family: Arial, sans-serif; color: #333; padding: 40px; background-color: #f4f6f9;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
    <h1 style="color: #6A1B9A; text-align: center; font-size: 28px; margin-bottom: 20px; letter-spacing: 1px;">Welcome to Make My Readme!</h1>
    <p style="font-size: 18px; line-height: 1.6; margin-bottom: 16px;">Hello,</p>
    <p style="font-size: 18px; line-height: 1.6; margin-bottom: 16px;">We are thrilled to have you on board! To continue, please use the OTP code below to verify your account.</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="display: inline-block; font-size: 24px; font-weight: bold; padding: 12px 24px; background: linear-gradient(90deg, #8E24AA, #5E35B1); color: #ffffff; border-radius: 12px; box-shadow: 0 3px 8px rgba(94, 53, 177, 0.2);">986726</span>
    </div>
    <p style="font-size: 18px; line-height: 1.6; margin-bottom: 16px; text-align: center; color: #6A1B9A; font-weight: bold;">This code expires in 10 minutes.</p>
    <p style="font-size: 18px; line-height: 1.6; margin-bottom: 16px;">Enter this code in the app to proceed. Need help? Just reply to this email or reach out to our support team anytime.</p>
    <p style="font-size: 18px; line-height: 1.6; margin-bottom: 30px;">If you did not request this code, please disregard this message.</p>
    <hr style="border: none; border-top: 1px solid #EFEFEF; margin: 20px 0;">
    <p style="font-size: 16px; line-height: 1.6; text-align: center; color: #999;">Thanks for choosing Make My Readme. We are here to make documentation easy and effective!</p>
    <p style="font-size: 16px; line-height: 1.6; text-align: center; color: #6A1B9A; font-weight: bold; margin-top: 16px;">The Make My Readme Team</p>
  </div>
</div>
    `,
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (error) {
		console.error("Error sending OTP:", error);
	}
};
