import { TRPCError } from "@trpc/server";
import * as Diff3 from "node-diff3";
import { z } from "zod";

import type { GetRouterArg } from "../../helpers/router";
import { pullShowQuery } from "../../paths/musics/[id]/pulls/[pullId]";
import { agenda } from "../common/agenda";
import { router } from "../trpc";

import { shieldedProcedure } from "./shield";

export const agendaRouter = router({
  create: shieldedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      // init
      const id = input,
        { prisma, session } = ctx,
        pull = await prisma.pull.findUnique({
          where: { id },
          include: {
            music: true,
            vote: {
              include: {
                _count: { select: { opponents: true, proponents: true } },
              },
            },
          },
        });
      if (!pull?.vote) throw new TRPCError({ code: "BAD_REQUEST" });

      const merged = Diff3.mergeDiff3(
        pull.music.score || "",
        pull.score.original,
        pull.score.changed
      );

      if (pull.score.original === pull.score.changed)
        throw new TRPCError({ code: "BAD_REQUEST", message: "no diff" });

      if (merged.conflict)
        throw new TRPCError({ code: "BAD_REQUEST", message: "conflict" });

      agenda.define(`vote: { id: ${id} }`, async () => {
        const pull = await prisma.pull.findUnique({
          where: { id },
          include: {
            vote: {
              include: {
                _count: { select: { opponents: true, proponents: true } },
              },
            },
          },
        });
        if (!pull?.vote) return;
        const {
          vote: {
            _count: { opponents, proponents },
          },
        } = pull;
        await prisma.pull.update({
          where: { id },
          data:
            proponents > opponents
              ? {
                  status: "MERGE",
                  music: { update: { score: pull.score.changed } },
                }
              : {
                  status: "CLOSE",
                  vote: { delete: true },
                },
        });
      });

      // act
      await agenda.start();
      await agenda.schedule(pull.vote.end, `vote: { id: ${id} }`);

      const router = { query: { pullId: id } };
      return await prisma.pull.findUnique(
        pullShowQuery({ session, router: router as GetRouterArg })
      );
    }),
});
