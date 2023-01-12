import { youtube } from "../../../../server/common/youtube";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;

  await youtube.channels
    .list({
      id: [String(id)],
      part: ["snippet"],
      maxResults: 6,
    })
    .then((data) => res.status(200).json(data.data))
    .catch((err) => {
      console.log(err);
      res.status(500).end("頭に来ますよ～");
    });
};

export default handler;
