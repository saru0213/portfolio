"use client";

import { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../configs/firebase-config";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
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
          setEditData(docSnap.data()); // Initialize editData for editing
        } else {
          console.log("No user document found");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [session, status, router]);

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const docRef = doc(db, "users", session.user.id);
      await updateDoc(docRef, editData);
      setUserData(editData); // Update local userData with new data
      setIsEditing(false); // Exit edit mode
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (status === "loading") return <p>Loading session...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>

      {userData ? (
        <>
          {isEditing ? (
            <>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    name="username"
                    value={editData.username || ""}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={editData.email || ""}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={editData.age || ""}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={editData.phone || ""}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>

              <button
                onClick={handleSave}
                className="mt-6 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="mt-2 ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
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
                onClick={() => setIsEditing(true)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Edit Profile
              </button>

              <button
                onClick={() => signOut({ callbackUrl: "/loginform" })}
                className="mt-4 ml-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
}
