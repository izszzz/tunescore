import * as trpc from "@trpc/server";
import { permissions } from "../../../shield/shield";

import { Context } from '../../../../src/server/router/context';

export function createRouter() {
  return trpc.router<Context>();
}

export function createProtectedRouter() {
  return trpc
    .router<Context>()

    .middleware(permissions);
}
