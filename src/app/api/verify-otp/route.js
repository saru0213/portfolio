// pages/api/verify-otp.js
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, otp } = await req.json();

    if (!email || !otp) {
      return NextResponse.json(
        { error: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const storedOTPData = global.otpStore?.get(email);

    if (!storedOTPData) {
      return NextResponse.json(
        { error: "OTP expired or not found" },
        { status: 400 }
      );
    }

    if (storedOTPData.otp !== otp) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // Check if OTP is not older than 5 minutes
    const now = new Date();
    const otpAge = now - storedOTPData.createdAt;

    if (otpAge > 1 * 60 * 1000) {
      // 1 minute
      global.otpStore.delete(email);
      return NextResponse.json({ error: "OTP has expired" }, { status: 400 });
    }

    // Clear OTP after successful verification
    global.otpStore.delete(email);

    return NextResponse.json(
      { message: "OTP verified successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return NextResponse.json(
      { error: "Failed to verify OTP" },
      { status: 500 }
    );
  }
}
