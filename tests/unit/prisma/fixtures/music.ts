import type { Prisma } from "@prisma/client";
import * as Factory from "factory.ts";

export const musicFactory = Factory.Sync.makeFactory<Prisma.MusicCreateInput>({
  type: "COPY",
  visibillity: "PUBLIC",
  resource: { create: { unionType: "Music" } },
});
