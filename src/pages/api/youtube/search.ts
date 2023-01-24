import type { NextApiRequest, NextApiResponse } from "next";

import { youtube } from "../../../server/common/youtube";

const SpotifySearchHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const {
    query: { type, term },
  } = req;

  await youtube.search
    .list({
      q: String(term),
      type: [type as string],
      part: ["snippet"],
      videoCategoryId: "10",
      maxResults: 6,
    })
    .then((data) => res.status(200).json(data.data))
    .catch((err) => {
      console.log(err);
      res.status(500).end("頭に来ますよ～");
    });
};

export default SpotifySearchHandler;
