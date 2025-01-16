"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail(formData: FormData) {
  try {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const projectType = formData.get("projectType");
    const message = formData.get("message");
    const date = new Date().toLocaleDateString();

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #2563eb, #1d4ed8); padding: 30px; border-radius: 8px 8px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #ffffff; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1d4ed8; display: block; margin-bottom: 5px; }
            .value { background: #f8fafc; padding: 12px; border-radius: 6px; }
            .message-box { background: #f8fafc; padding: 15px; border-radius: 6px; margin-top: 20px; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
            .badge { display: inline-block; background: #dbeafe; color: #1d4ed8; padding: 5px 12px; border-radius: 15px; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏗️ New Project Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Date Received</span>
                <div class="value">${date}</div>
              </div>
              
              <div class="field">
                <span class="label">Client Name</span>
                <div class="value">${firstName} ${lastName}</div>
              </div>
              
              <div class="field">
                <span class="label">Email Address</span>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <span class="label">Project Type</span>
                <div class="value">
                  <span class="badge">${projectType}</span>
                </div>
              </div>
              
              <div class="field">
                <span class="label">Message</span>
                <div class="message-box">
                  ${message}
                </div>
              </div>
              
              <div class="footer">
                <p>This inquiry was received through the ConstructCo website contact form.</p>
                <p>© ${new Date().getFullYear()} ConstructCo. All rights reserved.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || "your-email@domain.com",
      subject: `New Project Inquiry - ${projectType} | ${firstName} ${lastName}`,
      html: htmlTemplate,
    };

    await transporter.sendMail(mailOptions);

    return {
      message: "Thank you for your message. We'll be in touch soon!",
      success: true,
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      message: "Something went wrong. Please try again later.",
      success: false,
    };
  }
}
