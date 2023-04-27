// src/server/db/client.ts
import { PrismaClient } from "@prisma/client";

import { env } from "../../env/server.mjs";

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
        async findUnique({ model, operation, args, query }) {
          // set `age` and fill with the rest of `where`
          if (args.include?.vote) {
            const data = await query({ ...args, include: { vote: true } });
            console.log(data);
          }

          return query(args);
        },
      },
    },
  }) as unknown as PrismaClient);

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
