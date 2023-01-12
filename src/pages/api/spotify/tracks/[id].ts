import { authorized } from "../../../../helpers/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;

  let spotify;
  try {
    spotify = await authorized(req, res);
  } catch (err) {
    return res.status(401).send(err);
  }

  // get tracks
  await spotify.getTrack(id as string).then(
    ({ body }) => res.status(200).json(body),
    (err) => {
      console.log(err);
      res.status(401).send("accesstoken expired");
    }
  );
};

export default handler;
