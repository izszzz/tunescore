import { Prisma, PrismaClient } from "@prisma/client";
import isPast from "date-fns/isPast";
import * as R from "remeda";

import type { SessionArg } from "./user";
import { userWhere, userSelect } from "./user";

export const voteInclude = (session: SessionArg) =>
    Prisma.validator<Prisma.VoteInclude>()({
      proponents: { where: userWhere(session), select: userSelect },
      opponents: { where: userWhere(session), select: userSelect },
      _count: { select: { proponents: true, opponents: true } },
    }),
  checkVoteResult = async (where: Prisma.PullWhereUniqueInput) => {
    const prisma = new PrismaClient();
    const pull = await prisma.pull.findUnique({
      where,
      include: {
        vote: {
          include: {
            _count: { select: { opponents: true, proponents: true } },
          },
        },
        music: true,
      },
    });
    if (pull?.vote) {
      const {
        changed,
        vote: {
          end,
          _count: { opponents, proponents },
        },
      } = pull;
      if (isPast(end))
        await prisma.pull.update({
          where,
          data:
            proponents > opponents
              ? {
                  status: "MERGE",
                  music: { update: { score: changed } },
                }
              : {
                  status: "CLOSE",
                  vote: { delete: true },
                },
        });
    }
  },
  checkVotesResult = async (where: Prisma.ResourceWhereUniqueInput) => {
    const prisma = new PrismaClient();
    const resource = await prisma.resource.findUnique({
      where,
      include: {
        music: {
          include: {
            pulls: {
              include: {
                vote: {
                  include: {
                    _count: { select: { opponents: true, proponents: true } },
                  },
                },
              },
            },
          },
        },
      },
    });
    if (resource?.music?.pulls) {
      prisma.$transaction(
        R.pipe(
          resource.music.pulls,
          R.map((pull) => {
            if (!pull.vote) return;
            const {
              vote: {
                end,
                _count: { opponents, proponents },
              },
            } = pull;
            if (isPast(end))
              return prisma.pull.update({
                where,
                data:
                  proponents > opponents
                    ? {
                        status: "MERGE",
                        music: { update: { score: pull.changed } },
                      }
                    : {
                        status: "CLOSE",
                        vote: { delete: true },
                      },
              });
          }),
          R.compact
        )
      );
    }
  };
