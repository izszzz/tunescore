// src/pages/api/examples.ts
import { Agenda } from "@hokify/agenda";
import { env } from "../../env/server.mjs";
import { prisma } from "../../server/db/client";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    body: { pullId },
  } = req;
  // init
  const agenda = new Agenda({ db: { address: env.DATABASE_URL } });
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
        status: "MERGED",
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
