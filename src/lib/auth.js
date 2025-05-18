import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

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

      let data = await User.findOneAndUpdate(
        { name: user.name, provider: account.provider },
        { name: user.name, provider: account.provider },
        { upsert: true, new: true }
      );

      return true;
    },
    async jwt({ token, user, account }) {
      if (user && account) {
        const data = await User.findOne({
          name: user.name,
          provider: account.provider,
        });
        token.user = { id: data._id };
      }

      return token;
    },
    async session({ session, token }) {
      session.user.id = token.user?.id;
      return session;
    },
  },
};

const getSession = (req, res) => getServerSession(req, res, authOptions);

export { authOptions, getSession };
