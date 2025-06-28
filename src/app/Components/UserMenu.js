"use client";

import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { db } from "../../../configs/firebase-config";

export default function UserMenu() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (session?.user?.id) {
        try {
          const userDocRef = doc(db, "users", session.user.id);
          const userSnap = await getDoc(userDocRef);
          if (userSnap.exists()) {
            setUserData(userSnap.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    fetchUser();
  }, [session]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return null;

  // ✅ fallback avatar logic
  const avatarUrl =
    userData?.image ||
    session.user.image ||
   `https://ui-avatars.com/api/?name=${encodeURIComponent(
            userData?.email
          )}&background=random&format=png`;

  // ✅ Determine final email to display
  const email = userData?.email || session.user.email;

  return (
    <div className="relative">
      <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
        <Image
          src={avatarUrl}
          alt="Profile"
          width={35}
          height={35}
          className="rounded-full border hover:ring-2 hover:ring-blue-500 transition"
        />
      </button>

      {menuOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white border rounded shadow-md z-50 p-3">
          <p
            className="text-sm text-gray-700 truncate"
            title={email} // shows full email on hover
          >
            {email}
          </p>
         
          <button
            onClick={() => signOut()}
            className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
