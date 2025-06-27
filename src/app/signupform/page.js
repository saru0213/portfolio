"use client";

import React, { useState, useEffect } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import bcrypt from "bcryptjs";
import VerifyOTP from "../Components/verifyOtp";
import { db } from "../../../configs/firebase-config";
import Login from "../Components/Glogin";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Cookies from "js-cookie";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [verificationStep, setVerificationStep] = useState("form");
  const [loading, setLoading] = useState(false);
  const [currentFormValues, setCurrentFormValues] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/");
    }
  });

  const checkUserExists = async (email, phone) => {
    const usersRef = collection(db, "users");

    const emailQuery = query(usersRef, where("email", "==", email));
    const emailSnapshot = await getDocs(emailQuery);
    if (!emailSnapshot.empty) {
      throw new Error("An account with this email already exists");
    }

    const phoneQuery = query(usersRef, where("phone", "==", phone));
    const phoneSnapshot = await getDocs(phoneQuery);
    if (!phoneSnapshot.empty) {
      throw new Error("An account with this phone number already exists");
    }
  };

  const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  };

  const sendOTP = async (email) => {
    setLoading(true);
    try {
      const response = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to send OTP");
      }
      setVerificationStep("verifying");
    } catch (error) {
      alert("Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    try {
      await checkUserExists(values.email, values.phone);
      setCurrentFormValues(values);
      await sendOTP(values.email);
    } catch (error) {
      if (error.message.includes("email")) {
        setFieldError("email", error.message);
      } else if (error.message.includes("phone")) {
        setFieldError("phone", error.message);
      } else {
        alert(error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleVerificationSuccess = async () => {
    if (!currentFormValues) {
      alert("Form data is missing. Please try again.");
      setVerificationStep("form");
      return;
    }

    try {
      await checkUserExists(currentFormValues.email, currentFormValues.phone);
      const hashedPassword = await hashPassword(currentFormValues.password);

      await addDoc(collection(db, "users"), {
        username: currentFormValues.username,
        email: currentFormValues.email,
        phone: currentFormValues.phone,
        password: hashedPassword,
        emailVerified: true,
        createdAt: new Date(),
      });

      alert("Account created successfully!");
      Cookies.set("loggedIn", true);
      router.push("/loginform");
    } catch (error) {
      console.error("Error creating account:", error);
      alert(error.message || "An error occurred while creating the account.");
    }
  };

  if (verificationStep === "verifying" && currentFormValues) {
    return (
      <VerifyOTP
        email={currentFormValues.email}
        onVerificationSuccess={handleVerificationSuccess}
        onEmailUpdate={(newEmail) =>
          setCurrentFormValues((prev) => ({ ...prev, email: newEmail }))
        }
        onResendOTP={sendOTP}
        sendOTP={sendOTP}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Form Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
            <p className="mt-2 text-gray-600">Join for exclusive access!</p>
          </div>

          <div className="mt-4">
            <Login />
          </div>

          <div className="relative">
            <hr className="border-gray-300" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sm text-gray-500">
              or
            </span>
          </div>

          <Formik
            initialValues={{
              username: "",
              email: "",
              phone: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              isSubmitting,
            }) => (
              <Form className="space-y-4">
                <div className="relative">
                  <span
                    className={`absolute ${
                      errors.username && touched.username
                        ? "top-3 start-0"
                        : "inset-y-0 start-0"
                    }  grid place-content-center px-3 ${
                      focusedField === "username"
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    <User className="size-4" />
                  </span>
                  <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={() => setFocusedField("username")}
                    className={`w-full rounded-lg border ${
                      errors.username && touched.username
                        ? "border-red-500"
                        : "border-gray-200"
                    } p-3 ps-10 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100`}
                    placeholder="Username"
                  />
                  {errors.username && touched.username && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.username}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <span
                    className={`absolute ${
                      errors.email && touched.email
                        ? "top-3 start-0"
                        : "inset-y-0 start-0"
                    }  grid place-content-center px-3 ${
                      focusedField === "email"
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    <Mail className="size-4" />
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={() => setFocusedField("email")}
                    className={`w-full rounded-lg border ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "border-gray-200"
                    } p-3 ps-10 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100`}
                    placeholder="Email address"
                  />
                  {errors.email && touched.email && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <span
                    className={`absolute ${
                      errors.phone && touched.phone
                        ? "top-3 start-0"
                        : "inset-y-0 start-0"
                    } grid place-content-center px-3 ${
                      focusedField === "phone"
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    <Phone className="size-4" />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onFocus={() => setFocusedField("phone")}
                    className={`w-full rounded-lg border ${
                      errors.phone && touched.phone
                        ? "border-red-500"
                        : "border-gray-200"
                    } p-3 ps-10 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100`}
                    placeholder="Phone number"
                  />
                  {errors.phone && touched.phone && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.phone}
                    </div>
                  )}
                </div>

                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <span
                      className={`absolute ${
                        errors.password && touched.password
                          ? "top-3 start-0"
                          : "inset-y-0 start-0"
                      } grid place-content-center px-3 ${
                        focusedField === "password"
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    >
                      <Lock className="size-4" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={() => setFocusedField("password")}
                      className={`w-full rounded-lg border ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-200"
                      } p-3 ps-10 pe-10 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100`}
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute ${
                        errors.password && touched.password
                          ? "top-3 end-0"
                          : "inset-y-0 end-0"
                      } grid place-content-center px-3 text-gray-400 hover:text-gray-600`}
                    >
                      {showPassword ? (
                        <EyeOff className="size-4" />
                      ) : (
                        <Eye className="size-4" />
                      )}
                    </button>
                    {errors.password && touched.password && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div className="relative flex-1">
                    <span
                      className={`absolute ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "top-3 start-0"
                          : "inset-y-0 start-0"
                      } grid place-content-center px-3 ${
                        focusedField === "confirmPassword"
                          ? "text-blue-600"
                          : "text-gray-400"
                      }`}
                    >
                      <Lock className="size-4" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      onFocus={() => setFocusedField("confirmPassword")}
                      className={`w-full rounded-lg border ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-500"
                          : "border-gray-200"
                      } p-3 ps-10 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100`}
                      placeholder="Confirm password"
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                      <div className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || loading}
                  className="w-full rounded-lg bg-blue-600 p-3 text-sm font-semibold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 disabled:opacity-50 transition-colors"
                >
                  {isSubmitting || loading ? "Creating Account..." : "Sign up"}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <a
                    className="text-blue-600 hover:underline"
                    href="/loginform"
                  >
                    Log in
                  </a>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative hidden md:block md:w-1/2">
        <Image
          src="/signup.jpeg"
          alt="signup"
          width={300}
          height={500}
          // priority
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute bottom-8 left-0 right-0 text-center">
            <p className="text-lg font-medium text-white mb-4">
              Already have an account?
            </p>
            <a
              href="/loginform"
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-blue-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-300 transition-colors"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
