"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase-config";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session?.user?.id) {
      router.push("/loginform");
      return;
    }

    const fetchUser = async () => {
      try {
        const docRef = doc(db, "users", session.user.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No user document found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [session, status, router]);

  if (status === "loading") return <p>Loading session...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>

      {userData ? (
        <>
          <p>
            <strong>Name:</strong> {userData.username || userData.name}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Age:</strong> {userData.age || "N/A"}
          </p>

          <p>
            <strong>Phone:</strong> {userData.phone || "N/A"}
          </p>

          <button
            onClick={() => signOut({ callbackUrl: "/loginform" })}
            className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
