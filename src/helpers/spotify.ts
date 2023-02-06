import { TRPCError } from "@trpc/server";
import type { Session } from "next-auth";
import { z } from "zod";

import { spotify } from "../server/common/spotify";
import { prisma } from "../server/db/client";

export const authorized = async (session: Session | null) => {
  // check authrized
  if (!session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });

  // check authrized user exist
  let user;
  try {
    user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { accounts: true },
    });
  } catch (err) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Session.user is not exist",
    });
  }

  // check spotify account linked
  const account = user?.accounts.find(
    (account) => account.provider === "spotify"
  );
  if (!account)
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Not linked spotify account",
    });

  account.access_token && spotify.setAccessToken(account.access_token);
  account.refresh_token && spotify.setRefreshToken(account.refresh_token);

  if (account.expires_at && Date.now() > account.expires_at) {
    spotify.refreshAccessToken().then(
      async function (data) {
        spotify.setAccessToken(data.body["access_token"]);
        await prisma.account.update({
          where: { id: account.id },
          data: {
            access_token: data.body.access_token,
            refresh_token: data.body.refresh_token,
          },
        });
      },
      function (err) {
        console.log("Could not refresh access token", err);
      }
    );
  }

  return spotify;
};

export const searchType = z.union([
  z.literal("album"),
  z.literal("artist"),
  z.literal("playlist"),
  z.literal("track"),
  z.literal("show"),
  z.literal("episode"),
]);
export type SearchType = z.infer<typeof searchType>;
