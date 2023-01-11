import { authorized } from "../../../helpers/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

const SpotifySearchHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { type, term },
  } = req;

  let spotify;
  try {
    spotify = await authorized(req, res);
  } catch (err) {
    return res.status(401).send(err);
  }

  // get tracks
  await spotify
    .search(term as string, [type] as Parameters<typeof spotify.search>[1])
    .then(
      (data) => res.status(200).json(data),
      (err) => {
        console.log(err);
        res.status(401).send("accesstoken expired");
      }
    );
};

export default SpotifySearchHandler;