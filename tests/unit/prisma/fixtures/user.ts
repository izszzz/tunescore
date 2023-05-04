import type { Prisma } from "@prisma/client";
import * as Factory from "factory.ts";

export const userFactory = Factory.Sync.makeFactory<Prisma.UserCreateInput>({
  name: "User",
});
