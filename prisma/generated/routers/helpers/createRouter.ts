import * as trpc from "@trpc/server";
import { permissions } from "../../shield/shield";

import { Context } from '../../../../src/server/context';

export const t = trpc.initTRPC.context<Context>().create();

export const permissionsMiddleware = t.middleware(permissions);

export const publicProcedure = t.procedure;

export const shieldedProcedure = t.procedure

  .use(permissionsMiddleware)




