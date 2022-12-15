import { createRouter } from "./context";
import { MusicFindUniqueSchema } from "../../../prisma/generated/schemas/findUniqueMusic.schema";
import { ArtistFindUniqueSchema } from "../../../prisma/generated/schemas/findUniqueArtist.schema";
import { BandFindUniqueSchema } from "../../../prisma/generated/schemas/findUniqueBand.schema";
import { AlbumFindUniqueSchema } from "../../../prisma/generated/schemas/findUniqueAlbum.schema";

export const bookmarkedRouter = createRouter()
  .query("music", {
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
  })
  .query("album", {
    input: AlbumFindUniqueSchema.shape.where,
    async resolve({ ctx, input }) {
      const bookmarked = await ctx.prisma.album.findFirst({
        where: input,
        include: {
          bookmarks: { where: { id: ctx.session?.user?.id } },
        },
      });
      return !!bookmarked?.bookmarks.length;
    },
  })
  .query("artist", {
    input: ArtistFindUniqueSchema.shape.where,
    async resolve({ ctx, input }) {
      const bookmarked = await ctx.prisma.artist.findFirst({
        where: input,
        include: {
          bookmarks: { where: { id: ctx.session?.user?.id } },
        },
      });
      return !!bookmarked?.bookmarks.length;
    },
  })
  .query("band", {
    input: BandFindUniqueSchema.shape.where,
    async resolve({ ctx, input }) {
      const bookmarked = await ctx.prisma.band.findFirst({
        where: input,
        include: {
          bookmarks: { where: { id: ctx.session?.user?.id } },
        },
      });
      return !!bookmarked?.bookmarks.length;
    },
  });
