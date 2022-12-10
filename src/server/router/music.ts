import { createRouter } from "./context";
import { z } from "zod";
import { TRPCError } from "@trpc/server";
import { Prisma } from "@prisma/client";
import { createPaginator } from "prisma-pagination";
import { MusicFindManySchema } from "../../../prisma/generated/schemas/findManyMusic.schema";
import { MusicCreateInputObjectSchema } from "../../../prisma/generated/schemas/objects/MusicCreateInput.schema";
import { MusicFindUniqueSchema } from "../../../prisma/generated/schemas/findUniqueMusic.schema";
import { MusicUpdateOneSchema } from "../../../prisma/generated/schemas/updateOneMusic.schema";
import { PaginateOptionsSchema } from "../../utils/zod";

export const musicRouter = createRouter()
  .query("index", {
    input: z.object({
      options: PaginateOptionsSchema,
      args: MusicFindManySchema,
    }),
    async resolve({ ctx, input }) {
      const { args, options } = input;
      const paginate = createPaginator(options);
      return await paginate<
        Prisma.MusicGetPayload<{
          include: { user: true; composers: true; lyrists: true; band: true };
        }>,
        Prisma.MusicFindManyArgs
      >(ctx.prisma.music, args);
    },
  })
  .query("show", {
    input: MusicFindUniqueSchema,
    async resolve({ ctx, input }) {
      const music = await ctx.prisma.music.findUnique({
        ...input,
        include: {
          user: true,
          band: true,
          composers: true,
          lyrists: true,
          artists: true,
        },
      });
      if (!music) throw new TRPCError({ code: "NOT_FOUND" });
      const bookmarked = await ctx.prisma.music.findFirst({
        where: input.where,
        include: {
          bookmarks: { where: { id: ctx.session?.user?.id } },
        },
      });
      return { ...music, bookmarked: !!bookmarked?.bookmarks.length };
    },
  })
  .mutation("search", {
    input: MusicFindManySchema,
    async resolve({ ctx, input }) {
      return ctx.prisma.music.findMany(input);
    },
  })
  .mutation("create", {
    input: MusicCreateInputObjectSchema,
    async resolve({ ctx, input }) {
      if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });
      let customInput: Prisma.MusicCreateInput = input;
      if (input.type === "ORIGINAL") {
        customInput = {
          ...input,
          user: {
            connect: {
              id: ctx.session.user?.id,
            },
          },
        };
      }
      return await ctx.prisma.music.create({
        data: {
          ...customInput,
        },
      });
    },
  })

  .mutation("update", {
    input: MusicUpdateOneSchema,
    async resolve({ ctx, input }) {
      return await ctx.prisma.music.update({
        ...input,
        include: { composers: true, lyrists: true, band: true, artists: true },
      });
    },
  })
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.music.delete({ where: { id: input.id } });
    },
  })
  .mutation("bookmark.create", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ ctx, input: { id } }) {
      if (!ctx.session?.user) throw new TRPCError({ code: "UNAUTHORIZED" });
      const { user } = ctx.session;
      return await ctx.prisma.music.update({
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
      return await ctx.prisma.music.update({
        where: { id },
        data: {
          bookmarks: {
            disconnect: { id: ctx.session.user.id },
          },
        },
      });
    },
  });
