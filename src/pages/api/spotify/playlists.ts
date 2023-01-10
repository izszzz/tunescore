import { getSession } from "next-auth/react";
import { getUsersPlaylists } from "../../../lib/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session?.token) return res.status(401);

  const response = await getUsersPlaylists(session.token.accessToken);
  const { items } = await response.json();

  return res.status(200).json({ items });
};

export default handler;
