import { PrismaAdapter } from "@next-auth/prisma-adapter";
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
    session: async ({ session, user }) => {
      const data = await prisma.account.findMany({
        where: { user: { id: user.id } },
      });
      user.providers = data.map((account) => account.provider);
      session.user = user;
      return session;
    },
  },
  events: {
    createUser: async ({ user }) => {
      if (user.email) {
        const customer = await stripe.customers.create({
          email: user.email,
        });
        await prisma.user.update({
          where: {
            id: user.id,
          },
          data: {
            stripeCustomerId: customer.id,
          },
        });
      }
    },
  },
  // Configure one or more authentication providers
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
