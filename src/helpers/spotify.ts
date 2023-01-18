import type { NextApiRequest, NextApiResponse } from "next";

import { getServerAuthSession } from "../server/common/get-server-auth-session";
import { spotify } from "../server/common/spotify";
import { prisma } from "../server/db/client";

export const authorized = async (req: NextApiRequest, res: NextApiResponse) => {
  // check authrized
  const session = await getServerAuthSession({ req, res });
  if (!session?.user) throw new Error("Not Authorized Session.user");

  // check authrized user exist
  let user;
  try {
    user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { accounts: true },
    });
  } catch (err) {
    throw new Error("Session.User is not exist");
  }

  // check spotify account linked
  const account = user?.accounts.find(
    (account) => account.provider === "spotify"
  );
  if (!account) throw new Error("Not linked spotify account");

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
