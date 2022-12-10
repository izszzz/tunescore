import { createRouter } from "./context";
import { MusicFindUniqueSchema } from "../../../prisma/generated/schemas/findUniqueMusic.schema";

export const bookmarkedRouter = createRouter().query("music", {
  input: MusicFindUniqueSchema.shape.where,
  async resolve({ ctx, input }) {
    const bookmarked = await ctx.prisma.music.findFirst({
      where: input,
      include: {
        bookmarks: { where: { id: ctx.session?.user?.id } },
      },
    });
    return !!bookmarked?.bookmarks.length;
  },
});
