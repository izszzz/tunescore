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
import { router, publicProcedure } from "../trpc";
import type { MusicListQueryType } from "../../helpers/music";
import type { BandListQueryType } from "../../helpers/band";
import type { ArtistListQueryType } from "../../helpers/artist";
import type { AlbumListQueryType } from "../../helpers/album";
import type { Prisma } from "@prisma/client";

export const paginationRouter = router({
  music: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: MusicFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
      const { args, options } = input;
      const paginate = createPaginator(options);
      const data = await paginate<
        Prisma.MusicGetPayload<MusicListQueryType>,
        Prisma.MusicFindManyArgs
      >(ctx.prisma.music, args);
      return { type: "music" as const, ...data };
    }),
  artist: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: ArtistFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
      const { args, options } = input;
      const paginate = createPaginator(options);
      const data = await paginate<
        Prisma.ArtistGetPayload<ArtistListQueryType>,
        Prisma.ArtistFindManyArgs
      >(ctx.prisma.artist, args);
      return { type: "artist" as const, ...data };
    }),
  band: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: BandFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
      const { args, options } = input;
      const paginate = createPaginator(options);
      const data = await paginate<
        Prisma.BandGetPayload<BandListQueryType>,
        Prisma.BandFindManyArgs
      >(ctx.prisma.band, args);
      return { type: "band" as const, ...data };
    }),
  album: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: AlbumFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
      const { args, options } = input;
      const paginate = createPaginator(options);
      const data = await paginate<
        Prisma.AlbumGetPayload<AlbumListQueryType>,
        Prisma.AlbumFindManyArgs
      >(ctx.prisma.album, args);
      return { type: "album" as const, ...data };
    }),
  user: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: UserFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
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
    }),
  issue: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: PullFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.IssueGetPayload<{
          include: { user: true };
        }>,
        Prisma.IssueFindManyArgs
      >(ctx.prisma.issue, args);
    }),
  pull: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: PullFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.PullGetPayload<{
          include: { user: true };
        }>,
        Prisma.PullFindManyArgs
      >(ctx.prisma.pull, args);
    }),
  follow: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: FollowFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
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
    }),
  bookmark: publicProcedure
    .input(
      z.object({
        options: PaginateOptionsSchema,
        args: BookmarkFindManySchema,
      })
    )
    .query(async ({ ctx, input }) => {
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
    }),
});
