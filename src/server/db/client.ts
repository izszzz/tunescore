// src/server/db/client.ts
import { PrismaClient } from "@prisma/client";

import { env } from "../../env/server.mjs";
import { checkVoteResult, checkVotesResult } from "../../helpers/vote";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  (new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  }).$extends({
    query: {
      pull: {
        findUnique({ args, query }) {
          if (args.include?.vote) checkVoteResult(args.where);
          return query(args);
        },
      },
      resource: {
        findUnique({ args, query }) {
          if (typeof args.include?.music !== "boolean")
            if (typeof args.include?.music?.include?.pulls !== "boolean")
              if (args.include?.music?.include?.pulls?.include?.vote)
                checkVotesResult(args.where);

          return query(args);
        },
      },
    },
  }) as unknown as PrismaClient);

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
