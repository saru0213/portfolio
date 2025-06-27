"use client";

import React, { useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { db } from "../../../configs/firebase-config";
import Image from "next/image";
import Login from "../Components/Glogin";
import { signIn } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react"; // If using Heroicons

const LoginPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [resetLoading, setResetLoading] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetStatus, setResetStatus] = useState("");

  const handleChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoginLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: formData.username,
      password: formData.password,
      rememberMe: formData.rememberMe.toString(),
    });

    if (res.ok) {
      console.log(res);
      router.push("/dashboard");
    } else {
      setError("Invalid username/email or password");
    }

    setLoginLoading(false);
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setResetStatus("");
    setResetLoading(true);

    try {
      const resetToken = Math.random().toString(36).substr(2, 15);
      const resetExpiration = new Date();
      resetExpiration.setHours(resetExpiration.getHours() + 1);

      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", resetEmail.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error("Email not found");
      }

      const userDoc = querySnapshot.docs[0];

      await updateDoc(doc(db, "users", userDoc.id), {
        resetToken,
        resetExpiration: resetExpiration.toISOString(),
      });

      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail, resetToken }),
      });

      if (!response.ok) {
        throw new Error("Failed to send reset email");
      }

      setResetStatus("Password reset link has been sent to your email");
      setTimeout(() => setIsResetModalOpen(false), 3000);
    } catch (err) {
      console.error("Password reset error:", err);
      setResetStatus(err.message);
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Image Section */}
      <div className="md:w-1/2 bg-blue-600 relative hidden md:block">
        <Image
          src="/loginform.jpeg"
          alt="Login"
          width={300}
          height={500}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/30 flex items-center justify-center">
          <div className="text-white text-center p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-xl">We&apos;re glad to see you again</p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-3">
            Login
          </h2>
          <p className="text-center text-gray-600 mb-8">Unlock your world</p>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded">
                {error}
              </div>
            )}

            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username or Email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <Eye className="h-5 w-5" />
                ) : (
                  <EyeOff className="h-5 w-5" />
                )}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>

              <button
                type="button"
                onClick={() => setIsResetModalOpen(true)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold disabled:opacity-50 transition-colors"
            >
              {loginLoading ? "Logging in..." : "Login"}
            </button>

            <div className="relative my-6">
              <hr className="border-gray-300" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">
                or
              </span>
            </div>

            <div>
              <Login />
            </div>

            <p className="text-center text-gray-600 mt-8">
              Don&apos;t have an account?{" "}
              <a
                className="text-blue-600 hover:underline font-semibold"
                href="/signupform"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Password Reset Modal */}
      {isResetModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Reset Password</h3>
            <form onSubmit={handlePasswordReset} className="space-y-4">
              {resetStatus && (
                <div
                  className={`p-3 rounded ${
                    resetStatus.includes("Password reset link has been sent")
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {resetStatus}
                </div>
              )}
              <input
                type="email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsResetModalOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={resetLoading}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                >
                  {resetLoading ? "Sending..." : "Send Reset Link"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
