// app/dashboard/page.jsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import DashboardClient from "../Components/dashboardClient";


export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/loginform");
  }

  return <DashboardClient />;
}


















// "use client";

// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// // your Firebase client config
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../../configs/firebase-config";

// export default function ProfilePage() {
//   const { data: session, status } = useSession();
//   const [userData, setUserData] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     if (status === "loading") return;

//     if (!session?.user?.id) {
//       router.push("/loginform");
//       return;
//     }

//     const fetchUser = async () => {
//       try {
//         const docRef = doc(db, "users", session.user.id);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setUserData(docSnap.data());
//         } else {
//           console.warn("No user document found");
//         }
//       } catch (error) {
//         console.error("Error fetching user:", error);
//       }
//     };

//     fetchUser();
//   }, [session, status]);

//   if (status === "loading") return <p>Loading...</p>;

//   return (
//     <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
//       <h1 className="text-2xl font-bold mb-4">👤 Profile</h1>
//       {userData ? (
//         <>
//           <p><strong>Name:</strong> {userData.username || userData.name}</p>
//           <p><strong>Email:</strong> {userData.email}</p>
//           <p><strong>Age:</strong> {userData.age || "N/A"}</p>
//           <p><strong>Profile:</strong> {userData.image || "N/A"}</p>
//           <p><strong>Phone:</strong> {userData.phone || "N/A"}</p>
//         </>
//       ) : (
//         <p>No user data found.</p>
//       )}
//     </div>
//   );
// }
