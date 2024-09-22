"use server";

import { getEmailtemplate } from "@/lib/getEmailTemplate";
// app/actions/sendEmail.ts
import nodemailer from "nodemailer";

// Create a transporter using your email service credentials
const transporter = nodemailer.createTransport({
  service: "gmail", // Use any email service (e.g., Gmail, SendGrid, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Store this in environment variables
    pass: process.env.EMAIL_PASS // Store this securely in environment variables
  }
});

// Server action to send email
export async function sendEmail({ name, email, businessDetails, message }) {
  const mailOptions = {
    port: 465,
    host: "smtp.gmail.com",
    from: process.env.EMAIL_USER, // Sender email
    to: process.env.RECEIVER_EMAIL, // Receiver email (your email)
    subject: "New Business Inquiry",
    text: `Name: ${name}\nEmail: ${email}\nBusiness Details: ${businessDetails}\nMessage: ${message}`
  };

  const customerEmailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // Email of the person who submitted the form
    subject: "Thank you for reaching out!",
    html: getEmailtemplate(name, email, businessDetails, message)
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(customerEmailOptions);
    console.log("sent");
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
