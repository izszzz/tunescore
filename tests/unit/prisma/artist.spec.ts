import { expect, test } from "@playwright/test";

import { prisma } from "../../../src/server/db/client";

test("onDelete", async () => {
  const newArtist = await prisma.artist.create({
    data: {
      resource: { create: { unionType: "Artist" } },
      participations: {
        create: {
          music: {
            create: {
              type: "ORIGINAL",
              visibillity: "PRIVATE",
              resource: { create: { unionType: "Music" } },
            },
          },
        },
      },
    },
  });

  await prisma.artist.delete({ where: { id: newArtist?.id } });
  await expect(
    await prisma.artist.findFirst({ where: { id: newArtist?.id } })
  ).toEqual(null);
});
