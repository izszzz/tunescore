import type { Prisma } from "@prisma/client";
import type { PaginateOptions } from "prisma-pagination";
import { createPaginator } from "prisma-pagination";

import {
  NotificationFindManySchema,
  ResourceFindManySchema,
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
import { env } from "../../env/server.mjs";
import type { AlbumListArgsType } from "../../helpers/album";
import type { ArtistListArgsType } from "../../helpers/artist";
import type { BandListArgsType } from "../../helpers/band";
import type { MusicListArgsType } from "../../helpers/music";
import type { ResourceListArgsType } from "../../helpers/resource";
import type { TransactionArgsType } from "../../helpers/transaction";
import type { userArgs } from "../../helpers/user";
import type { NotificationArgsType } from "../../paths/dashboard/notifications";
import { PaginateInputSchema } from "../../utils/zod";
import { router, publicProcedure } from "../trpc";

const paginator = ({
  perPage = env.NEXT_PUBLIC_DEFAULT_PAGINATION_PER_PAGE,
  ...options
}: PaginateOptions) => createPaginator({ ...options, perPage });

export const paginationRouter = router({
  resource: publicProcedure
    .input(PaginateInputSchema(ResourceFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await paginator(options)<
          Prisma.ResourceGetPayload<ResourceListArgsType>,
          Prisma.ResourceFindManyArgs
        >(ctx.prisma.resource, args)
    ),
  music: publicProcedure
    .input(PaginateInputSchema(MusicFindManySchema))
    .query(async ({ ctx, input: { args, options } }) => {
      const data = await paginator(options)<
        Prisma.MusicGetPayload<MusicListArgsType>,
        Prisma.MusicFindManyArgs
      >(ctx.prisma.music, args);
      return { type: "music" as const, ...data };
    }),
  artist: publicProcedure
    .input(PaginateInputSchema(ArtistFindManySchema))
    .query(async ({ ctx, input: { args, options } }) => {
      const data = await paginator(options)<
        Prisma.ArtistGetPayload<ArtistListArgsType>,
        Prisma.ArtistFindManyArgs
      >(ctx.prisma.artist, args);
      return { type: "artist" as const, ...data };
    }),
  band: publicProcedure
    .input(PaginateInputSchema(BandFindManySchema))
    .query(async ({ ctx, input: { args, options } }) => {
      const data = await paginator(options)<
        Prisma.BandGetPayload<BandListArgsType>,
        Prisma.BandFindManyArgs
      >(ctx.prisma.band, args);
      return { type: "band" as const, ...data };
    }),
  album: publicProcedure
    .input(PaginateInputSchema(AlbumFindManySchema))
    .query(async ({ ctx, input: { args, options } }) => {
      const data = await paginator(options)<
        Prisma.AlbumGetPayload<AlbumListArgsType>,
        Prisma.AlbumFindManyArgs
      >(ctx.prisma.album, args);
      return { type: "album" as const, ...data };
    }),
  user: publicProcedure
    .input(PaginateInputSchema(UserFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await paginator(options)<
          Prisma.UserGetPayload<typeof userArgs>,
          Prisma.UserFindManyArgs
        >(ctx.prisma.user, args)
    ),
  issue: publicProcedure
    .input(PaginateInputSchema(IssueFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await paginator(options)<
          Prisma.IssueGetPayload<{ include: { user: typeof userArgs } }>,
          Prisma.IssueFindManyArgs
        >(ctx.prisma.issue, args)
    ),
  pull: publicProcedure
    .input(PaginateInputSchema(PullFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await paginator(options)<
          Prisma.PullGetPayload<{ include: { user: typeof userArgs } }>,
          Prisma.PullFindManyArgs
        >(ctx.prisma.pull, args)
    ),
  follow: publicProcedure
    .input(PaginateInputSchema(FollowFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await paginator(options)<
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
        await paginator(options)<
          Prisma.BookmarkGetPayload<{
            include: { resource: ResourceListArgsType };
          }>,
          Prisma.BookmarkFindManyArgs
        >(ctx.prisma.bookmark, args)
    ),
  transaction: publicProcedure
    .input(PaginateInputSchema(TransactionFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await paginator(options)<
          Prisma.TransactionGetPayload<{ include: TransactionArgsType }>,
          Prisma.TransactionFindManyArgs
        >(ctx.prisma.transaction, args)
    ),
  notification: publicProcedure
    .input(PaginateInputSchema(NotificationFindManySchema))
    .query(
      async ({ ctx, input: { args, options } }) =>
        await paginator(options)<
          Prisma.NotificationGetPayload<NotificationArgsType>,
          Prisma.NotificationFindManyArgs
        >(ctx.prisma.notification, args)
    ),
});
