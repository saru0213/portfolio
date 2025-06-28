import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Components/Provider";
import Header from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Secure Auth",
description: "A Next.js project for secure user authentication with OTP and modern security features."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Provider><Header/>{children}</Provider></body>
    </html>
  );
  
}
