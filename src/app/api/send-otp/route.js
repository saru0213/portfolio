import { sendOTPEmail } from "@/lib/emailService";
import { NextResponse } from "next/server";
export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP temporarily
    global.otpStore = global.otpStore || new Map();
    global.otpStore.set(email, {
      otp,
      createdAt: new Date(),
    });

    await sendOTPEmail(email, otp);

    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending OTP:", error);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }
}
