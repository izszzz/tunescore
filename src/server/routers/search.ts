import { AlbumFindManySchema } from "../../../prisma/generated/schemas/findManyAlbum.schema";
import { ArtistFindManySchema } from "../../../prisma/generated/schemas/findManyArtist.schema";
import { BandFindManySchema } from "../../../prisma/generated/schemas/findManyBand.schema";
import { BookmarkFindManySchema } from "../../../prisma/generated/schemas/findManyBookmark.schema";
import { FollowFindManySchema } from "../../../prisma/generated/schemas/findManyFollow.schema";
import { IssueFindManySchema } from "../../../prisma/generated/schemas/findManyIssue.schema";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { PullFindManySchema } from "../../../prisma/generated/schemas/findManyPull.schema";
import { RoleFindManySchema } from "../../../prisma/generated/schemas/findManyRole.schema";
import { TagFindManySchema } from "../../../prisma/generated/schemas/findManyTag.schema";
import { UserFindManySchema } from "../../../prisma/generated/schemas/findManyUser.schema";
import { publicProcedure, router } from "../trpc";

export const searchRouter = router({
  music: publicProcedure
    .input(MusicFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.music.findMany(input)),
  artist: publicProcedure
    .input(ArtistFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.artist.findMany(input)),
  band: publicProcedure
    .input(BandFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.band.findMany(input)),
  album: publicProcedure
    .input(AlbumFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.album.findMany(input)),
  user: publicProcedure
    .input(UserFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.user.findMany(input)),
  issue: publicProcedure
    .input(IssueFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.issue.findMany(input)),
  pull: publicProcedure
    .input(PullFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.pull.findMany(input)),
  tag: publicProcedure
    .input(TagFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.tag.findMany(input)),
  role: publicProcedure
    .input(RoleFindManySchema)
    .mutation(async ({ ctx, input }) => ctx.prisma.role.findMany(input)),
  follow: publicProcedure
    .input(FollowFindManySchema)
    .mutation(async ({ ctx, input }) =>
      ctx.prisma.follow.findMany({
        ...input,
        include: { follower: true, following: true },
      })
    ),
  bookmark: publicProcedure
    .input(BookmarkFindManySchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.bookmark.findMany({
        ...input,
        include: {
          music: {
            include: {
              user: true,
              band: true,
              bookmarks: true,
              _count: {
                select: {
                  bookmarks: true,
                },
              },
            },
          },
          album: {
            include: {
              band: true,
              _count: {
                select: {
                  musics: true,
                  bookmarks: true,
                  artists: true,
                },
              },
            },
          },
          band: {
            include: {
              _count: {
                select: {
                  bookmarks: true,
                  artists: true,
                  musics: true,
                  albums: true,
                },
              },
            },
          },
          artist: {
            include: {
              bands: true,
              _count: {
                select: {
                  bookmarks: true,
                },
              },
            },
          },
        },
      });
    }),
});
