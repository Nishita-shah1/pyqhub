import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { connectDb } from "@/lib/connectDb";
import { User } from "@/models/user.model.js";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },
    async signIn({ profile }) {
      try {
        console.log(profile);
        await connectDb();

        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          const user = await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
