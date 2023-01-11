import { spotify } from "../../../../server/common/spotify";
import { prisma } from "../../../../server/db/client";
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  let user;
  const {
    query: { q },
  } = req;

  // check authrized
  const session = await getServerAuthSession({ req, res });
  if (!session?.user) return res.status(401).send("not authrized");

  // check authrized user exist
  try {
    user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: { accounts: true },
    });
  } catch (err) {
    return res.status(404).send("not found user");
  }

  // check spotify account linked
  const account = user?.accounts.find(
    (account) => account.provider === "spotify"
  );
  if (!account) return res.status(401).send("not linked spotify account");

  // set token
  account.access_token && spotify.setAccessToken(account.access_token);
  account.refresh_token && spotify.setRefreshToken(account.refresh_token);

  const data = await spotify
    .searchTracks("Mr. Brightside", {
      limit: 3,
      offset: 2,
    })
    .then(
      (data) => res.status(200).json({ data }),
      (_err) => res.status(401).send("accesstoken expired")
    );
};

export default handler;
