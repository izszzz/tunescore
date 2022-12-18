import { createRouter } from "./context";
import { z } from "zod";
import { Prisma } from "@prisma/client";
import { createPaginator } from "prisma-pagination";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { PaginateOptionsSchema } from "../../utils/zod";
import { IssueFindManySchema as PullFindManySchema } from "../../../prisma/generated/schemas/findManyIssue.schema";
import { ArtistFindManySchema } from "../../../prisma/generated/schemas/findManyArtist.schema";
import { BandFindManySchema } from "../../../prisma/generated/schemas/findManyBand.schema";
import { UserFindManySchema } from "../../../prisma/generated/schemas/findManyUser.schema";
import { AlbumFindManySchema } from "../../../prisma/generated/schemas/findManyAlbum.schema";

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
        Prisma.MusicGetPayload<{
          include: {
            user: true;
            composers: true;
            lyrists: true;
            band: true;
            artists: true;
          };
        }>,
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
        Prisma.ArtistGetPayload<{
          include: { bands: true };
        }>,
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
        Prisma.BandGetPayload<{
          include: {
            _count: {
              select: {
                artists: true;
                musics: true;
              };
            };
          };
        }>,
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
        Prisma.AlbumGetPayload<{
          include: {
            band: true;
            _count: {
              select: {
                artists: true;
                musics: true;
              };
            };
          };
        }>,
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
        Prisma.UserGetPayload<null>,
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
  });
