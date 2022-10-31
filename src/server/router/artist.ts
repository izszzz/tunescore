import {createRouter} from "./context"
import {z} from "zod"
import {locale} from "../../utils/zod"
import schemaTypeFor from "../../types/schemaForType"
import {Artist, Prisma} from "@prisma/client"

export const artistRouter = createRouter()
  .query("index", {
    async resolve({ctx}) {
      return await ctx.prisma.artist.findMany()
    },
  })
  .query("show", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.findFirst({where: {id: input.id}})
    },
  })
  .mutation("search", {
    input: z.object({
      name: z.string(),
      locale: z.string(),
    }),
    async resolve({ctx, input}) {
      const result = await ctx.prisma.artist.findRaw({
        filter: {
          ["name." + input.locale]: {$regex: input.name, $options: "i"},
        },
      })
      // TODO: 型修正できないらしい
      // https://github.com/prisma/prisma/issues/11830
      // https://github.com/prisma/prisma/issues/5062
      return result?.map(data => {
        const {
          _id: {$oid: id},
          ...other
        } = data
        return {id, ...other}
      }) as Artist[]
    },
  })
  .mutation("create", {
    input: schemaTypeFor<Prisma.ArtistCreateInput>()(z.object({name: locale})),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.create({data: input})
    },
  })
  .mutation("update", {
    input: z.object({
      id: z.string(),
      name: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.update({
        where: {id: input.id},
        data: {
          name: input.name,
        },
      })
    },
  })
  .mutation("destroy", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.delete({where: {id: input.id}})
    },
  })
