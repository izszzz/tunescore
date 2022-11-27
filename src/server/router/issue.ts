import {createRouter} from "./context"
import {z} from "zod"
import schemaTypeFor from "../../types/schemaForType"
import {Prisma} from "@prisma/client"
import {createPaginator, PaginateOptions} from "prisma-pagination"
import {IssueFindManySchema} from "../../../prisma/generated/schemas/findManyIssue.schema"
import {IssueCreateInputObjectSchema} from "../../../prisma/generated/schemas/objects/IssueCreateInput.schema"
import {IssueUpdateOneSchema} from "../../../prisma/generated/schemas/updateOneIssue.schema"
import {IssueDeleteOneSchema} from "../../../prisma/generated/schemas/deleteOneIssue.schema"

export const issueRouter = createRouter()
  .query("index", {
    input: z.object({
      options: schemaTypeFor<PaginateOptions>()(
        z.object({
          page: z.number().or(z.string()).optional(),
          perPage: z.number().or(z.string()).optional(),
        })
      ),
      args: IssueFindManySchema,
    }),
    async resolve({ctx, input}) {
      const {args, options} = input
      const paginate = createPaginator(options)
      return await paginate<
        Prisma.IssueGetPayload<{
          include: {user: true; music: true}
        }>,
        Prisma.IssueFindManyArgs
      >(ctx.prisma.issue, args)
    },
  })
  .mutation("search", {
    input: IssueFindManySchema,
    async resolve({ctx, input}) {
      return ctx.prisma.issue.findMany(input)
    },
  })
  .mutation("create", {
    input: IssueCreateInputObjectSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.issue.create({
        data: {...input, user: {connect: {id: ctx.session?.user?.id}}},
      })
    },
  })
  .mutation("update", {
    input: IssueUpdateOneSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.issue.update(input)
    },
  })
  .mutation("destroy", {
    input: IssueDeleteOneSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.artist.delete(input)
    },
  })
