"use client";

import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardClient() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    // If session expired or unauthenticated, auto sign out
    if (status === "unauthenticated" || !session) {
      setError("Session expired. Please login again.");
      signOut({ callbackUrl: "/loginform" });
      return;
    }

    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch user data");
        setUser(data);
        setError("");
      } catch (err) {
        setError(err.message);
        setTimeout(() => router.push("/loginform"), 2000);
      }
    };

    fetchUserData();

    // ✅ Auto-refresh before session expiry
    const expiryTime = new Date(session.expires).getTime();
    const currentTime = Date.now();
    const timeUntilExpiry = expiryTime - currentTime;

    if (timeUntilExpiry > 0) {
      const timer = setTimeout(() => {
        console.log("Session expired, refreshing page...");
        window.location.reload(); // Refresh page to update session status
      }, timeUntilExpiry + 1000); // slight buffer

      return () => clearTimeout(timer); // cleanup on unmount
    }
  }, [status, session, router]);

  if (status === "loading") return <p>Loading session...</p>;

  if (error)
    return (
      <div className="max-w-md mx-auto mt-10 p-4 rounded border border-red-400 bg-red-50 text-red-700">
        <p>{error}</p>
      </div>
    );

  if (!user) return <p>Loading user...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">👤 Dashboard</h1>
      <p>
        <strong>Name:</strong> {user.username || user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Age:</strong> {user.age || "N/A"}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone || "N/A"}
      </p>

      <button
        onClick={() => signOut({ callbackUrl: "/loginform" })}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
