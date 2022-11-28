import {createRouter} from "./context"
import {z} from "zod"
import {Prisma} from "@prisma/client"
import {createPaginator} from "prisma-pagination"
import {IssueFindManySchema} from "../../../prisma/generated/schemas/findManyIssue.schema"
import {IssueUpdateOneSchema} from "../../../prisma/generated/schemas/updateOneIssue.schema"
import {IssueDeleteOneSchema} from "../../../prisma/generated/schemas/deleteOneIssue.schema"
import {IssueCreateWithoutUserInputObjectSchema} from "../../../prisma/generated/schemas/objects/IssueCreateWithoutUserInput.schema"
import {PullFindUniqueSchema} from "../../../prisma/generated/schemas/findUniquePull.schema"
import {PaginateOptionsSchema} from "../../utils/zod"

export const issueRouter = createRouter()
  .query("index", {
    input: z.object({
      options: PaginateOptionsSchema,
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
  .query("show", {
    input: PullFindUniqueSchema,
    async resolve({ctx, input}) {
      return await ctx.prisma.pull.findUnique({
        ...input,
        include: {user: true, music: true},
      })
    },
  })
  .mutation("search", {
    input: IssueFindManySchema,
    async resolve({ctx, input}) {
      return ctx.prisma.issue.findMany(input)
    },
  })
  .mutation("create", {
    input: IssueCreateWithoutUserInputObjectSchema,
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
      return await ctx.prisma.issue.delete(input)
    },
  })
