import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { Prisma, UserRoleType } from "@prisma/client";
import NextAuth, { type NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import SpotifyProvider from "next-auth/providers/spotify";

// Prisma adapter for NextAuth, optional and can be removed
import { env } from "../../../env/server.mjs";
import { stripe } from "../../../server/common/stripe";
import { prisma } from "../../../server/db/client";

console.log(env);
export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session: async ({ session, user, token }) => {
      const data = await prisma.account.findMany({
        where: { user: { id: user.id } },
      });
      if (token && session.user) session.user.role = token.role as UserRoleType;
      user.providers = data.map((account) => account.provider);
      session.user = user;
      return session;
    },
    jwt: async ({ token, user }) => {
      token.role = user?.role;
      return token;
    },
  },
  events: {
    createUser: async ({ user }) => {
      if (user.email) {
        const customer = await stripe.customers.create({ email: user.email });
        const data: Prisma.UserUpdateInput = {};

        data.stripeCustomerId = customer.id;
        if (user.email === "hakeiprod@gmail.com") data.role = "Admin";

        await prisma.user.update({ where: { id: user.id }, data });
      }
    },
  },
  // Configure one or more authentication providers
  session: {
    strategy: "jwt", // See https://next-auth.js.org/configuration/nextjs#caveats, middleware (currently) doesn't support the "database" strategy which is used by default when using an adapter (https://next-auth.js.org/configuration/options#session)
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    SpotifyProvider({
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  debug: true,
};

export default NextAuth(authOptions);
