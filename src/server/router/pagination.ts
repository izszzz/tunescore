import { z } from "zod";
import { createPaginator } from "prisma-pagination";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { PaginateOptionsSchema } from "../../utils/zod";
import { IssueFindManySchema as PullFindManySchema } from "../../../prisma/generated/schemas/findManyIssue.schema";
import { ArtistFindManySchema } from "../../../prisma/generated/schemas/findManyArtist.schema";
import { BandFindManySchema } from "../../../prisma/generated/schemas/findManyBand.schema";
import { UserFindManySchema } from "../../../prisma/generated/schemas/findManyUser.schema";
import { AlbumFindManySchema } from "../../../prisma/generated/schemas/findManyAlbum.schema";
import { FollowFindManySchema } from "../../../prisma/generated/schemas/findManyFollow.schema";
import { BookmarkFindManySchema } from "../../../prisma/generated/schemas/findManyBookmark.schema";
import { createRouter } from "./context";
import type { MusicListQueryType } from "../../helpers/music";
import type { BandListQueryType } from "../../helpers/band";
import type { ArtistListQueryType } from "../../helpers/artist";
import type { AlbumListQueryType } from "../../helpers/album";
import type { Prisma } from "@prisma/client";

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
        Prisma.MusicGetPayload<MusicListQueryType>,
        Prisma.MusicFindManyArgs
      >(ctx.prisma.music, args);
    },
  })
  .query("artist", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: ArtistFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.ArtistGetPayload<ArtistListQueryType>,
        Prisma.ArtistFindManyArgs
      >(ctx.prisma.artist, args);
    },
  })
  .query("band", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: BandFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.BandGetPayload<BandListQueryType>,
        Prisma.BandFindManyArgs
      >(ctx.prisma.band, args);
    },
  })
  .query("album", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: AlbumFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.AlbumGetPayload<AlbumListQueryType>,
        Prisma.AlbumFindManyArgs
      >(ctx.prisma.album, args);
    },
  })
  .query("user", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: UserFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.UserGetPayload<{
          include: {
            _count: { select: { following: true; followers: true } };
          };
        }>,
        Prisma.UserFindManyArgs
      >(ctx.prisma.user, args);
    },
  })
  .query("issue", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: PullFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.IssueGetPayload<{
          include: { user: true };
        }>,
        Prisma.IssueFindManyArgs
      >(ctx.prisma.issue, args);
    },
  })
  .query("pull", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: PullFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.PullGetPayload<{
          include: { user: true };
        }>,
        Prisma.PullFindManyArgs
      >(ctx.prisma.pull, args);
    },
  })
  .query("follow", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: FollowFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.FollowGetPayload<{
          include: {
            follower: {
              include: {
                _count: { select: { following: true; followers: true } };
              };
            };
            following: {
              include: {
                _count: { select: { following: true; followers: true } };
              };
            };
          };
        }>,
        Prisma.FollowFindManyArgs
      >(ctx.prisma.follow, args);
    },
  })
  .query("bookmark", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: BookmarkFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.BookmarkGetPayload<{
          include: {
            music: MusicListQueryType;
            band: BandListQueryType;
            artist: ArtistListQueryType;
            album: AlbumListQueryType;
          };
        }>,
        Prisma.BookmarkFindManyArgs
      >(ctx.prisma.bookmark, args);
    },
  });
