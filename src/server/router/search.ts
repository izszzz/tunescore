import { createRouter } from "./context";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { IssueFindManySchema } from "../../../prisma/generated/schemas/findManyIssue.schema";

export const searchRouter = createRouter()
  .mutation("music", {
    input: MusicFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.music.findMany(input);
    },
  })
  .mutation("issue", {
    input: IssueFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.issue.findMany(input);
    },
  });
