import { expect, test } from "@playwright/test";

import { prisma } from "../../../src/server/db/client";

test("onDelete", async () => {
  const user = await prisma.user.create({ data: { name: "test" } }),
    newMusic = await prisma.music.create({
      data: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
        resource: {
          create: { unionType: "Music" },
        },
        issues: {
          create: {
            title: "",
            body: "",
            user: {
              connect: { id: user?.id },
            },
          },
        },
        participations: {
          create: {
            artist: {
              create: { resource: { create: { unionType: "Artist" } } },
            },
          },
        },
        pulls: {
          create: {
            title: "",
            body: "",
            original: "",
            changed: "",
            user: { connect: { id: user?.id } },
          },
        },
        carts: { create: { user: { connect: { id: user?.id } } } },
        transactions: {
          create: {
            type: "PURCHASE",
            amount: 300,
          },
        },
        reports: {
          create: {
            type: "COPYRIGHT",
            body: "",
            unionType: "Music",
          },
        },
      },
    });

  await prisma.music.delete({ where: { id: newMusic?.id } });
  await expect(
    await prisma.music.findFirst({ where: { id: newMusic?.id } })
  ).toEqual(null);
});
