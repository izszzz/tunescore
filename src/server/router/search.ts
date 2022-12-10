import { createRouter } from "./context";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";

export const searchRouter = createRouter().mutation("music", {
  input: MusicFindManySchema,
  async resolve({ ctx, input }) {
    return ctx.prisma.music.findMany(input);
  },
});
