import { connectToDatabase } from "@/lib/mongoose";
import User from "@/lib/models/User";
import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      await connectToDatabase();
      const oauthKey = `${account.provider}:${account.providerAccountId}`;

      let mongoUser = await User.findById(oauthKey);

      let name = mongoUser ? mongoUser.name : user.name.replace(/\s+/g, "-");

      if (!mongoUser) {
        const base = name;
        while (await User.findOne({ name })) {
          name = `${base}_${Math.floor(Math.random() * 1000)}`;
        }

        mongoUser = await User.create({
          _id: oauthKey,
          name,
        });
      }

      let cookieStore = await cookies()
      await cookieStore.set("auth_name", name, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });

      return true;
    },

    async jwt({ token, account }) {
      if (account) {
        token.user = {
          id: `${account.provider}:${account.providerAccountId}`,
        };
      }
      return token;
    },

    async session({ session, token }) {
      let cookieStore = await cookies()
      const nameCookie = await cookieStore.get("auth_name");
      session.user.id = token.user?.id;
      session.user.auth_name = nameCookie?.value || null;
      return session;
    },
  },
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
