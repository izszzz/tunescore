import type { NextApiRequest, NextApiResponse } from "next";

import { authorized } from "../../../helpers/spotify";

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
      ({ body }) => {
        const keys = Object.keys(body);
        if (keys[0])
          res
            .status(200)
            .json(body[keys[0] as keyof SpotifyApi.SearchResponse]);
      },
      (err) => {
        console.log(err);
        res.status(500).send("これもうわかんねぇな");
      }
    );
};

export default SpotifySearchHandler;
