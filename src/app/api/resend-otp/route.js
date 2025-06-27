import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const otpStore = global.otpStore || {};
global.otpStore = otpStore;

export async function POST(request) {
  const { email } = await request.json();

  try {
    // Check if email exists in otpStore
    if (!otpStore[email]) {
      return NextResponse.json({
        success: false,
        message: "No OTP found for this email",
      });
    }

    // Generate new OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = { otp, timestamp: Date.now() };

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your new OTP code is ${otp}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("OTP resent successfully to:", email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
