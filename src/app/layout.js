import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Secure Auth",
description: "A Next.js project for secure user authentication with OTP and modern security features."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Provider>{children}</Provider></body>
    </html>
  );
}
