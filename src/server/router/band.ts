import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { createPaginator } from "prisma-pagination";
import { z } from "zod";
import { createRouter } from "./context";
import { BandFindManySchema } from "../../../prisma/generated/schemas/findManyBand.schema";
import { BandCreateInputObjectSchema } from "../../../prisma/generated/schemas/objects/BandCreateInput.schema";
import { BandUpdateOneSchema } from "../../../prisma/generated/schemas/updateOneBand.schema";
import { PaginateOptionsSchema } from "../../utils/zod";
import { BandFindUniqueSchema } from "../../../prisma/generated/schemas/findUniqueBand.schema";

export const bandRouter = createRouter()
  .query("index", {
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
  .query("show", {
    input: BandFindUniqueSchema,
    async resolve({ ctx, input }) {
      const band = await ctx.prisma.band.findUnique({
        ...input,
        include: {
          artists: true,
          musics: {
            include: {
              band: true,
              composers: true,
              lyrists: true,
            },
          },
        },
      });
      if (!band) throw new TRPCError({ code: "NOT_FOUND" });
      const bookmarked = await ctx.prisma.artist.findFirst({
        where: input.where,
        include: {
          bookmarks: { where: { id: ctx.session?.user?.id } },
        },
      });
      return { ...band, bookmarked: !!bookmarked?.bookmarks.length };
    },
  })
  .mutation("search", {
    input: BandFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.band.findMany(input);
    },
  })
  .mutation("create", {
    input: BandCreateInputObjectSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.band.create({
        data: { ...input },
      });
    },
  })
  .mutation("update", {
    input: BandUpdateOneSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.band.update(input);
    },
  })
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.band.delete({ where: input });
    },
  })
  .mutation("bookmark.create", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input: { id } }) {
      if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });
      const { user } = ctx.session;
      return await ctx.prisma.band.update({
        where: { id },
        data: {
          bookmarks: {
            connect: { id: user.id },
          },
        },
      });
    },
  })
  .mutation("bookmark.destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input: { id } }) {
      if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });
      return await ctx.prisma.band.update({
        where: { id },
        data: {
          bookmarks: {
            disconnect: { id: ctx.session.user.id },
          },
        },
      });
    },
  });
