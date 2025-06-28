
// app/api/auth/reset-password/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Validate email function
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export async function POST(req) {
  try {
    const { email, resetToken } = await req.json();

    // Validate inputs
    if (!email || !resetToken) {
      return NextResponse.json(
        { error: "Email and reset token are required" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error("Email configuration error:", error);
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    const mailOptions = {
      from: {
        name: "Avasrmarg",
        address: process.env.EMAIL_USER,
      },
      to: email,
      subject: "Password Reset Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Password Reset Request</h1>
          <p>Hello,</p>
          <p>You have requested to reset your password. Please click the button below to reset it:</p>
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://secure-auth-tau.vercel.app/reset-password?token=${resetToken}&email=${email}"
               style="background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px;">
              Reset Password
            </a>
         
          </div>
          <p>This link will expire in 1 hour for security reasons.</p>
          <p>If you didn't request this password reset, please ignore this email or contact support if you have concerns.</p>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This is an automated email, please do not reply.
          </p>
        </div>
      `,
      text: `
        Password Reset Request
        
        You have requested to reset your password. Please click the link below to reset it:
        
        https://secure-auth-tau.vercel.app/reset-password?token=${resetToken}&email=${email}
        
        This link will expire in 1 hour.
        
        If you didn't request this, please ignore this email.
      `,
    };

    // Send email with retry logic
    let attempts = 0;
    const maxAttempts = 3;

    while (attempts < maxAttempts) {
      try {
        await transporter.sendMail(mailOptions);
        break;
      } catch (error) {
        attempts++;
        if (attempts === maxAttempts) throw error;
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second before retry
      }
    }

    return NextResponse.json(
      { success: true, message: "Reset email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Password reset email error:", error);
    return NextResponse.json(
      { error: "Failed to send reset email. Please try again later." },
      { status: 500 }
    );
  }
}
