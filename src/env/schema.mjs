// @ts-check
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
export const serverSchema = z.object({
  DATABASE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET: z.string(),
  NEXTAUTH_URL: z.string().url(),
  DISCORD_CLIENT_ID: z.string(),
  DISCORD_CLIENT_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GOOGLE_API_KEY: z.string(),
  SPOTIFY_CLIENT_ID: z.string(),
  SPOTIFY_CLIENT_SECRET: z.string(),
  STRIPE_CLIENT_ID: z.string(),
  STRIPE_CLIENT_SECRET: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
export const clientSchema = z.object({
  // NEXT_PUBLIC_BAR: z.string(),
  NEXT_PUBLIC_STRIPE_CLIENT_ID: z.string(),
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string(),
  NEXT_PUBLIC_DEFAULT_PAGINATION_PER_PAGE: z.string(),
  NEXT_PUBLIC_DEFAULT_SEARCH_TAKE: z.string(),
  NEXT_PUBLIC_NUMBER_OF_CONTRIBUTORS_VOTING: z.string(),
});

/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // NEXT_PUBLIC_BAR: process.env.NEXT_PUBLIC_BAR,
  NEXT_PUBLIC_STRIPE_CLIENT_ID: process.env.NEXT_PUBLIC_STRIPE_CLIENT_ID,
  NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  NEXT_PUBLIC_DEFAULT_PAGINATION_PER_PAGE:
    process.env.NEXT_PUBLIC_DEFAULT_PAGINATION_PER_PAGE,
  NEXT_PUBLIC_DEFAULT_SEARCH_TAKE: process.env.NEXT_PUBLIC_DEFAULT_SEARCH_TAKE,
  NEXT_PUBLIC_NUMBER_OF_CONTRIBUTORS_VOTING:
    process.env.NEXT_PUBLIC_NUMBER_OF_CONTRIBUTORS_VOTING,
};
