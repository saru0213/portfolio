"use client";

import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import UserMenu from "./UserMenu";


export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="text-xl font-bold">My Website</div>

      <nav className="flex items-center space-x-4">
        <Link href="/login">
          <Mail className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
        </Link>

        <UserMenu />
      </nav>
    </header>
  );
}
