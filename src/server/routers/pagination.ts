import type { Prisma } from "@prisma/client";
import { createPaginator } from "prisma-pagination";

import {
  NotificationFindManySchema,
  TransactionFindManySchema,
} from "../../../prisma/generated/schemas";
import { AlbumFindManySchema } from "../../../prisma/generated/schemas/findManyAlbum.schema";
import { ArtistFindManySchema } from "../../../prisma/generated/schemas/findManyArtist.schema";
import { BandFindManySchema } from "../../../prisma/generated/schemas/findManyBand.schema";
import { BookmarkFindManySchema } from "../../../prisma/generated/schemas/findManyBookmark.schema";
import { FollowFindManySchema } from "../../../prisma/generated/schemas/findManyFollow.schema";
import {
  IssueFindManySchema,
  IssueFindManySchema as PullFindManySchema,
} from "../../../prisma/generated/schemas/findManyIssue.schema";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { UserFindManySchema } from "../../../prisma/generated/schemas/findManyUser.schema";
import type { AlbumListArgsType } from "../../helpers/album";
import type { ArtistListArgsType } from "../../helpers/artist";
import type { BandListArgsType } from "../../helpers/band";
import type { MusicListArgsType } from "../../helpers/music";
import type { TransactionArgsType } from "../../helpers/transaction";
import type { userCount } from "../../helpers/user";
import type { NotificationArgsType } from "../../paths/dashboard/notifications";
import { PaginateInputSchema } from "../../utils/zod";
import { router, publicProcedure } from "../trpc";

export const paginationRouter = router({
  music: publicProcedure
    .input(PaginateInputSchema(MusicFindManySchema))
    .query(async ({ ctx, input: { args, options } }) => {
      const data = await createPaginator(options)<
        Prisma.MusicGetPayload<MusicListArgsType>,
        Prisma.MusicFindManyArgs
      >(ctx.prisma.music, args);
      return { type: "music" as const, ...data };
    }),
  artist: publicProcedure
    .input(PaginateInputSchema(ArtistFindManySchema))
    .query(async ({ ctx, input: { args, options } }) => {
      const data = await createPaginator(options)<
        Prisma.ArtistGetPayload<ArtistListArgsType>,
        Prisma.ArtistFindManyArgs
      >(ctx.prisma.artist, args);
      return { type: "artist" as const, ...data };
    }),
  band: publicProcedure
    .input(PaginateInputSchema(BandFindManySchema))
    .query(async ({ ctx, input: { args, options } }) => {
      const data = await createPaginator(options)<
        Prisma.BandGetPayload<BandListArgsType>,
        Prisma.BandFindManyArgs
      >(ctx.prisma.band, args);
      return { type: "band" as const, ...data };
    }),
  album: publicProcedure
    .input(PaginateInputSchema(AlbumFindManySchema))
    .query(async ({ ctx, input: { args, options } }) => {
      const data = await createPaginator(options)<
        Prisma.AlbumGetPayload<AlbumListArgsType>,
        Prisma.AlbumFindManyArgs
      >(ctx.prisma.album, args);
      return { type: "album" as const, ...data };
    }),
  user: publicProcedure.input(PaginateInputSchema(UserFindManySchema)).query(
    async ({ ctx, input: { args, options } }) =>
      await createPaginator(options)<
        Prisma.UserGetPayload<{
          include: {
            _count: typeof userCount;
          };
        }>,
        Prisma.UserFindManyArgs
      >(ctx.prisma.user, args)
  ),
  issue: publicProcedure.input(PaginateInputSchema(IssueFindManySchema)).query(
    async ({ ctx, input: { args, options } }) =>
      await createPaginator(options)<
        Prisma.IssueGetPayload<{
          include: { user: true };
        }>,
        Prisma.IssueFindManyArgs
      >(ctx.prisma.issue, args)
  ),
  pull: publicProcedure.input(PaginateInputSchema(PullFindManySchema)).query(
    async ({ ctx, input: { args, options } }) =>
      await createPaginator(options)<
        Prisma.PullGetPayload<{
          include: { user: true };
        }>,
        Prisma.PullFindManyArgs
      >(ctx.prisma.pull, args)
  ),
  follow: publicProcedure
    .input(PaginateInputSchema(FollowFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await createPaginator(options)<
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
        >(ctx.prisma.follow, args)
    ),
  bookmark: publicProcedure
    .input(PaginateInputSchema(BookmarkFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await createPaginator(options)<
          Prisma.BookmarkGetPayload<{
            include: {
              music: MusicListArgsType;
              band: BandListArgsType;
              artist: ArtistListArgsType;
              album: AlbumListArgsType;
            };
          }>,
          Prisma.BookmarkFindManyArgs
        >(ctx.prisma.bookmark, args)
    ),
  transaction: publicProcedure
    .input(PaginateInputSchema(TransactionFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await createPaginator(options)<
          Prisma.TransactionGetPayload<{ include: TransactionArgsType }>,
          Prisma.TransactionFindManyArgs
        >(ctx.prisma.transaction, args)
    ),
  notification: publicProcedure
    .input(PaginateInputSchema(NotificationFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await createPaginator(options)<
          Prisma.NotificationGetPayload<NotificationArgsType>,
          Prisma.NotificationFindManyArgs
        >(ctx.prisma.notification, args)
    ),
});
