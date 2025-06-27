import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { db } from "@/lib/FirebaseAdmin";
import { NextResponse } from "next/server";

export async function GET(req) {
  const session = await getServerSession(authOptions);
  console.log("Session data:", session);

  if (!session?.user?.id) {
    console.log("Unauthorized access attempt to dashboard API");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const userDoc = await db.collection("users").doc(session.user.id).get();

    if (!userDoc.exists) {
      console.log(`User not found for id: ${session.user.id}`);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userData = userDoc.data();
    console.log(`Fetched user data for id: ${session.user.id}`);

    return NextResponse.json(userData, { status: 200 });
  } catch (err) {
    console.error("Dashboard API error:", err);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}
