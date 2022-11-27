import {createRouter} from "./context"
import {z} from "zod"
import schemaTypeFor from "../../types/schemaForType"
import {Prisma} from "@prisma/client"
import {TRPCError} from "@trpc/server"
import {createPaginator, PaginateOptions} from "prisma-pagination"

export const pullRouter = createRouter()
  .query("index", {
    input: z.object({
      options: schemaTypeFor<PaginateOptions>()(
        z.object({
          page: z.number().or(z.string()).optional(),
          perPage: z.number().or(z.string()).optional(),
        })
      ),
      args: schemaTypeFor<Prisma.PullFindManyArgs>()(
        z.object({
          include: z
            .object({
              user: z.boolean(),
            })
            .optional(),
          where: z
            .object({
              title: z.object({contains: z.string()}).optional(),
              music: z.object({id: z.string()}),
            })
            .optional(),
        })
      ),
    }),
    async resolve({ctx, input}) {
      const {args, options} = input
      const paginate = createPaginator(options)
      return await paginate<
        Prisma.PullGetPayload<{
          include: {user: true; music: true}
        }>,
        Prisma.PullFindManyArgs
      >(ctx.prisma.pull, args)
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.pull.findFirst({
        where: {id: input.id},
        include: {user: true, music: true},
      })
    },
  })
  .mutation("search", {
    input: schemaTypeFor<Prisma.PullFindManyArgs>()(
      z.object({
        where: z
          .object({
            title: z
              .object({
                contains: z.string().optional(),
              })
              .optional(),
            music: z.object({
              id: z.string(),
            }),
          })
          .optional(),
        take: z.number(),
      })
    ),
    async resolve({ctx, input}) {
      return ctx.prisma.pull.findMany(input)
    },
  })
  .mutation("create", {
    input: schemaTypeFor<
      Omit<Prisma.PullCreateInput, "user" | "score" | "status">
    >()(
      z.object({
        title: z.string(),
        body: z.string(),
        music: z.object({
          connect: z.object({id: z.string()}),
        }),
      })
    ),
    async resolve({ctx, input}) {
      if (!ctx.session?.user) throw new TRPCError({code: "UNAUTHORIZED"})
      const music = await ctx.prisma.music.findFirst({
        where: {id: input.music.connect.id},
      })
      return await ctx.prisma.pull.create({
        data: {
          ...input,
          status: "OPEN",
          score: {
            changed: music?.score || "",
            original: music?.score || "",
          },
          user: {connect: {id: ctx.session?.user?.id}},
        },
      })
    },
  })
  .mutation("update", {
    input: schemaTypeFor<Prisma.PullUpdateInput>()(
      z.object({
        status: z.enum(["DRAFT", "OPEN", "CLOSED", "MERGED"]).optional(),
        id: z.string(),
        title: z.string().optional(),
        body: z.string().optional(),
        score: z
          .object({
            update: z.object({
              original: z.string().optional(),
              changed: z.string().optional(),
            }),
          })
          .optional(),
        music: z
          .object({
            update: z.object({
              score: z.string().optional(),
            }),
          })
          .optional(),
      })
    ),
    async resolve({ctx, input}) {
      const {id, ...data} = input
      return await ctx.prisma.pull.update({
        where: {id},
        data,
      })
    },
  })
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.pull.delete({where: {id: input.id}})
    },
  })
