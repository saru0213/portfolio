import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
// Adjust to your path
import bcrypt from "bcrypt";
import { db } from "@/lib/FirebaseAdmin";

// Main Auth Configuration
export const authOptions = {
  providers: [
    // Google Login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Email/Password Login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const input = credentials.email; // assuming your login input field is called 'email' but user may enter username

          let userQuery = await db
            .collection("users")
            .where("email", "==", input)
            .get();

          if (userQuery.empty) {
            // Check username as fallback
            userQuery = await db
              .collection("users")
              .where("username", "==", input.toLowerCase()) // ensure username stored in lowercase
              .get();

            if (userQuery.empty) {
              console.log("No user found with this email or username");
              return null;
            }
          }

          const userDoc = userQuery.docs[0];
          const user = userDoc.data();

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            console.log("Incorrect password");
            return null;
          }

          return {
            id: userDoc.id,
            email: user.email,
            name: user.name || user.username,
          };
        } catch (error) {
          console.error("Credentials authorize error:", error);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/dashboard", // your custom login page
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
    maxAge: 2592000, // 🔒 1 hour in seconds
  },

  jwt: {
     maxAge: 2592000, // 🔒 1 hour for token too
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Return only required fields when user first logs in
        return {
          userId: user.id || "",
          createdAt: Date.now(),
          secret: process.env.NEXTAUTH_SECRET,
        };
      }

      // For subsequent requests, keep only your selected fields
      return {
        userId: token.userId || "",
        createdAt: token.createdAt,
        secret: token.secret,
      };
    },

    async session({ session, token }) {
      // Add custom user data
      session.user = {
        id: token.userId,
      };
      return session;
    },

    // Handle Google sign-in and save user to Firestore if not already there
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const userRef = db.collection("users");
          const existing = await userRef.where("email", "==", user.email).get();

          if (existing.empty) {
            await userRef.doc(user.id).set({
              name: user.name,
              email: user.email,
              image: user.image,
              provider: "google",
              createdAt: new Date(),
            });
            console.log("✅ New Google user added to Firestore with custom ID");
          } else {
            console.log("ℹ️ Google user already exists");
          }
        } catch (err) {
          console.error("Google signIn Firestore error:", err);
          return false;
        }
      }

      return true;
    },
  },
};

// Export handlers
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
