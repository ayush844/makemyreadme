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
    <div style="font-family: Arial, sans-serif; color: #333; padding: 15px; background-color: #f4f6f9; width: 100%; box-sizing: border-box;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1); box-sizing: border-box;">
    <h1 style="color: #6A1B9A; text-align: center; font-size: 22px; margin-bottom: 8px; letter-spacing: 0.5px;">Welcome to Make My Readme!</h1>
    <p style="font-size: 15px; line-height: 1.5; margin-bottom: 10px;">Hello,</p>
    <p style="font-size: 15px; line-height: 1.5; margin-bottom: 10px;">We're thrilled to have you on board! To continue, please use the OTP code below to verify your account.</p>
    <div style="text-align: center; margin: 15px 0;">
      <span style="display: inline-block; font-size: 18px; font-weight: bold; padding: 8px 16px; background: linear-gradient(90deg, #8E24AA, #5E35B1); color: #ffffff; border-radius: 8px; box-shadow: 0 2px 5px rgba(94, 53, 177, 0.2);">${otp}</span>
    </div>
    <p style="font-size: 15px; line-height: 1.5; margin-bottom: 10px;">Enter this code in the app to proceed. Need help? Just reply to this email or reach out to our support team anytime.</p>
    <p style="font-size: 15px; line-height: 1.5; margin-bottom: 20px;">If you did not request this code, please disregard this message.</p>
    <hr style="border: none; border-top: 1px solid #EFEFEF; margin: 15px 0;">
    <p style="font-size: 13px; line-height: 1.4; text-align: center; color: #999;">Thanks for choosing Make My Readme. We're here to make documentation easy and effective!</p>
    <p style="font-size: 13px; line-height: 1.4; text-align: center; color: #6A1B9A; font-weight: bold; margin-top: 10px;">The Make My Readme Team</p>
  </div>
</div>

<!-- Media query for mobile responsiveness -->
<style>
  @media only screen and (max-width: 600px) {
    div[style*="padding: 15px;"] {
      padding: 8px !important;
    }
    div[style*="max-width: 600px;"] {
      width: 100% !important;
      padding: 10px !important;
    }
    h1[style*="font-size: 22px;"] {
      font-size: 20px !important;
      margin-bottom: 6px !important;
    }
    p[style*="font-size: 15px;"] {
      font-size: 13px !important;
      margin-bottom: 8px !important;
    }
    span[style*="font-size: 18px;"] {
      font-size: 16px !important;
      padding: 6px 12px !important;
    }
  }
</style>

    `,
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (error) {
		console.error("Error sending OTP:", error);
	}
};
