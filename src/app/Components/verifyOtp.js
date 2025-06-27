"use client";
import React, { useState, useEffect, useRef } from "react";
import { AlertCircle, CheckCircle2, Loader2, Pencil } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const VerifyOTP = ({
  email: initialEmail,
  onVerificationSuccess,
  onResendOTP,
  sendOTP,
  onEmailUpdate, // optional: notify parent if email is edited
}) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [email, setEmail] = useState(initialEmail);

  const inputRefs = useRef([]);

  useEffect(() => {
    let timer;
    if (countdown > 0 && !canResend) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setCanResend(true);
    }
    return () => clearInterval(timer);
  }, [countdown, canResend]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);
    setError("");
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const pastedNumbers = pastedText.replace(/\D/g, "").slice(0, 6);
    if (pastedNumbers.length === 6) {
      const newOTP = pastedNumbers.split("");
      setOtp(newOTP);
      inputRefs.current[5]?.focus();
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter a complete 6-digit code");
      setLoading(false);
      return;
    }
    try {
      const response = await fetch("/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp: otpString }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Invalid verification code");
      }
      setSuccess(true);
      setTimeout(() => {
        onVerificationSuccess();
      }, 1000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!canResend) return;
    setCanResend(false);
    setCountdown(60);
    setError("");
    setOtp(["", "", "", "", "", ""]);
    await onResendOTP(email);
  };

  const handleSaveEditedEmail = async () => {
    setIsEditingEmail(false);
    setOtp(["", "", "", "", "", ""]);
    setCanResend(false);
    setCountdown(60);
    setError("");

    if (onEmailUpdate) onEmailUpdate(email); // inform parent
    if (sendOTP) {
      await sendOTP(email);
    } else {
      await onResendOTP(email);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Verify Your Email
          </h2>
          <p className="text-gray-600 mb-2">
            We&apos;ve sent a verification code to
          </p>

          {isEditingEmail ? (
            <div className="flex items-center gap-2 justify-center mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded px-2 py-1 text-sm w-2/3"
                required
              />
              <button
                onClick={handleSaveEditedEmail}
                className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
              >
                Send OTP
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 mb-4">
              <p className="font-medium text-gray-900">{email}</p>
              <button
                onClick={() => setIsEditingEmail(true)}
                className="text-blue-600 hover:text-blue-800"
                title="Edit Email"
              >
                <Pencil className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        <form onSubmit={handleVerifyOTP} className="mt-8 space-y-6">
          <div className="flex justify-center gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className="w-12 h-12 text-center text-2xl font-semibold rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                required
              />
            ))}
          </div>

          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mt-4 bg-green-50 border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-600">
                Verification successful! Redirecting...
              </AlertDescription>
            </Alert>
          )}

          <button
            type="submit"
            disabled={
              loading ||
              otp.some((digit) => !digit) ||
              success ||
              isEditingEmail
            }
            className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Verifying...
              </>
            ) : (
              "Verify Email"
            )}
          </button>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              Didn&apos;t receive the code?
            </p>
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={!canResend}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium disabled:opacity-50 transition-colors"
            >
              {canResend ? "Resend Code" : `Resend code in ${countdown}s`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOTP;
