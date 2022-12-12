import { createRouter } from "./context";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { createPaginator } from "prisma-pagination";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { PaginateOptionsSchema } from "../../utils/zod";
import { IssueFindManySchema } from "../../../prisma/generated/schemas/findManyIssue.schema";

export const paginationRouter = createRouter()
  .query("music", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: MusicFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.MusicGetPayload<{
          include: { user: true; composers: true; lyrists: true; band: true };
        }>,
        Prisma.MusicFindManyArgs
      >(ctx.prisma.music, args);
    },
  })
  .query("issue", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: IssueFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.IssueGetPayload<{
          include: { user: true; music: true };
        }>,
        Prisma.IssueFindManyArgs
      >(ctx.prisma.issue, args);
    },
  });
