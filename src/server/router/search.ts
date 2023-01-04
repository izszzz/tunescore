import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { IssueFindManySchema } from "../../../prisma/generated/schemas/findManyIssue.schema";
import { ArtistFindManySchema } from "../../../prisma/generated/schemas/findManyArtist.schema";
import { BandFindManySchema } from "../../../prisma/generated/schemas/findManyBand.schema";
import { UserFindManySchema } from "../../../prisma/generated/schemas/findManyUser.schema";
import { AlbumFindManySchema } from "../../../prisma/generated/schemas/findManyAlbum.schema";
import { PullFindManySchema } from "../../../prisma/generated/schemas/findManyPull.schema";
import { TagFindManySchema } from "../../../prisma/generated/schemas/findManyTag.schema";
import { BookmarkFindManySchema } from "../../../prisma/generated/schemas/findManyBookmark.schema";
import { FollowFindManySchema } from "../../../prisma/generated/schemas/findManyFollow.schema";
import { RoleFindManySchema } from "../../../prisma/generated/schemas/findManyRole.schema";
import { createRouter } from "./context";

export const searchRouter = createRouter()
  .mutation("music", {
    input: MusicFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.music.findMany(input);
    },
  })
  .mutation("artist", {
    input: ArtistFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.artist.findMany(input);
    },
  })
  .mutation("band", {
    input: BandFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.band.findMany(input);
    },
  })
  .mutation("album", {
    input: AlbumFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.album.findMany(input);
    },
  })
  .mutation("user", {
    input: UserFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.user.findMany(input);
    },
  })
  .mutation("issue", {
    input: IssueFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.issue.findMany(input);
    },
  })
  .mutation("pull", {
    input: PullFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.pull.findMany(input);
    },
  })
  .mutation("tag", {
    input: TagFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.tag.findMany(input);
    },
  })
  .mutation("role", {
    input: RoleFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.role.findMany(input);
    },
  })
  .mutation("bookmark", {
    input: BookmarkFindManySchema,
    async resolve({ ctx, input }) {
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
    },
  })
  .mutation("follow", {
    input: FollowFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.follow.findMany({
        ...input,
        include: { follower: true, following: true },
      });
    },
  });
