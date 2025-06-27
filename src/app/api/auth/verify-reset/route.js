import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import bcrypt from "bcryptjs";
import { db } from "../../../../../configs/firebase-config";

export async function POST(req) {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      return new Response(
        JSON.stringify({ error: "Token and new password are required" }),
        {
          status: 400,
        }
      );
    }

    // Step 1: Find user by reset token
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("resetToken", "==", token));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return new Response(
        JSON.stringify({ error: "Invalid or expired reset token" }),
        {
          status: 400,
        }
      );
    }

    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    // Step 2: Check token expiration
    const resetExpiration = new Date(userData.resetExpiration);
    const now = new Date();

    if (now > resetExpiration) {
      return new Response(
        JSON.stringify({ error: "Reset token has expired" }),
        {
          status: 400,
        }
      );
    }

    // Step 3: Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Step 4: Update the user document
    await updateDoc(doc(db, "users", userDoc.id), {
      password: hashedPassword,
      resetToken: null, // Clear the reset token
      resetExpiration: null, // Clear the expiration time
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Password has been reset successfully",
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Reset verification error:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while resetting the password",
      }),
      {
        status: 500,
      }
    );
  }
}
