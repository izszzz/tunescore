import { createRouter } from "./context";

export const userRouter = createRouter()
  .query("index", {
    async resolve({ ctx }) {
      return await ctx.prisma.user.findMany();
    },
  });