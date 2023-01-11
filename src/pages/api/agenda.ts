import { prisma } from "../../server/db/client";
import { agenda } from "../../server/common/agenda";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { pullId },
  } = req;
  // init
  const pull = await prisma.pull.findUnique({
    where: {
      id: pullId as string,
    },
    include: { vote: true },
  });
  // define
  agenda.define(`vote: { id: ${pullId} }`, async () => {
    await prisma.pull.update({
      where: { id: pullId as string },
      data: {
        status: "MERGE",
        music: { update: { score: pull?.score.changed } },
      },
    });
  });

  if (pull?.vote) {
    // act
    await agenda.start();
    await agenda.schedule(pull.vote.end, `vote: { id: ${pullId} }`);
  }
  res.status(200);
};

export default handler;
