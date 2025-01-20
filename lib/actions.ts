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
        body { 
          font-family: Arial, sans-serif; 
          line-height: 1.6; 
          color: #333;
          background-color: #f5f5f5;
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto; 
          padding: 20px; 
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          background: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .header { 
          background: linear-gradient(to right, #2563eb, #1d4ed8); 
          padding: 30px; 
          border-radius: 8px 8px 0 0;
          border-bottom: 3px solid #1d4ed8;
        }
        .header h1 { 
          color: white; 
          margin: 0; 
          font-size: 24px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        .content { 
          background: #ffffff; 
          padding: 30px;
          border-radius: 0 0 8px 8px;
          border: 1px solid #e5e7eb;
          border-top: none;
        }
        .field { 
          margin-bottom: 20px;
          border-bottom: 1px solid #f0f0f0;
          padding-bottom: 15px;
        }
        .field:last-child {
          border-bottom: none;
        }
        .label { 
          font-weight: bold; 
          color: #1d4ed8; 
          display: block; 
          margin-bottom: 5px;
        }
        .value { 
          background: #f8fafc; 
          padding: 12px; 
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }
        .message-box { 
          background: #f8fafc; 
          padding: 15px; 
          border-radius: 6px;
          margin-top: 20px;
          border: 1px solid #e5e7eb;
        }
        .footer { 
          text-align: center; 
          margin-top: 20px; 
          color: #64748b; 
          font-size: 14px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }
        .badge { 
          display: inline-block; 
          background: #dbeafe; 
          color: #1d4ed8; 
          padding: 5px 12px; 
          border-radius: 15px; 
          font-size: 14px;
          border: 1px solid #bfdbfe;
        }
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
            <p>This inquiry was received through the Sudarshan Construction website contact form.</p>
            <p>© ${new Date().getFullYear()} Sudarshan Construction. All rights reserved.</p>
          </div>
        </div>
      </div>
    </body>
  </html>
`;

    const mailOptions = {
      from: {
        name: `${firstName} ${lastName}`,
        address: process.env.EMAIL_USER as string,
      },
      replyTo: email as string,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Project Inquiry - ${projectType} | ${firstName} ${lastName}`,
      html: htmlTemplate,
      headers: {
        "Reply-To": email as string,
        "Return-Path": email as string,
      },
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

export async function sendGetStartedRequest(formData: FormData) {
  try {
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const projectType = formData.get("projectType");
    const projectSize = formData.get("projectSize");
    const timeline = formData.get("timeline");
    const budgetRange = formData.get("budgetRange");
    const date = new Date().toLocaleDateString();

    const htmlTemplate = `
   <!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f5f5f5;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        padding: 20px;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        background: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      .header {
        background: linear-gradient(to right, #2563eb, #1d4ed8);
        padding: 30px;
        border-radius: 8px 8px 0 0;
        border-bottom: 3px solid #1d4ed8;
      }
      .header h1 {
        color: white;
        margin: 0;
        font-size: 24px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      .content {
        background: #ffffff;
        padding: 30px;
        border-radius: 0 0 8px 8px;
        border: 1px solid #e5e7eb;
        border-top: none;
      }
      .field {
        margin-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 15px;
      }
      .field:last-child {
        border-bottom: none;
      }
      .label {
        font-weight: bold;
        color: #1d4ed8;
        display: block;
        margin-bottom: 5px;
      }
      .value {
        background: #f8fafc;
        padding: 12px;
        border-radius: 6px;
        border: 1px solid #e5e7eb;
      }
      .message-box {
        background: #f8fafc;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
        border: 1px solid #e5e7eb;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        color: #64748b;
        font-size: 14px;
        padding-top: 20px;
        border-top: 1px solid #e5e7eb;
      }
      .badge {
        display: inline-block;
        background: #dbeafe;
        color: #1d4ed8;
        padding: 5px 12px;
        border-radius: 15px;
        font-size: 14px;
        border: 1px solid #bfdbfe;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🏗️ New Project Request</h1>
      </div>
      <div class="content">
        <div class="field">
          <span class="label">Date Received</span>
          <div class="value">${date}</div>
        </div>

        <div class="field">
          <span class="label">Client Information</span>
          <div class="value">
            <p>Name: ${fullName}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
          </div>
        </div>

        <div class="field">
          <span class="label">Project Details</span>
          <div class="value">
            <p><span class="badge">${projectType}</span></p>
            <p>Size: ${projectSize}</p>
            <p>Timeline: ${timeline}</p>
            <p>Budget: ${budgetRange}</p>
          </div>
        </div>

        <div class="footer">
          <p>This request was submitted through the Sudarshan Construction website Get Started form.</p>
          <p>© ${new Date().getFullYear()} Sudarshan Construction. All rights reserved.</p>
        </div>
      </div>
    </div>
  </body>
</html>

  `;

    const mailOptions = {
      from: {
        name: fullName as string,
        address: process.env.EMAIL_USER as string,
      },
      replyTo: email as string,
      to: process.env.EMAIL_RECIPIENT,
      subject: `New Project Request - ${projectType} | ${fullName}`,
      html: htmlTemplate,
      headers: {
        Priority: "high",
        "Reply-To": email as string,
        "Return-Path": email as string,
      },
    };

    await transporter.sendMail(mailOptions);

    return {
      message:
        "Your project request has been successfully submitted. We'll be in touch soon!",
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
