import { expect, test } from "@playwright/test";

import { prisma } from "../../../src/server/db/client";

test("onDelete", async () => {
  const newUser = await prisma.user.create({ data: { name: "test" } });
  const music = await prisma.music.create({
    data: {
      type: "ORIGINAL",
      visibillity: "PUBLIC",
      resource: {
        create: {
          unionType: "Music",
        },
      },
    },
  });
  await prisma.user.create({
    data: {
      pulls: {
        create: [
          {
            title: "a",
            body: "b",
            original: "",
            changed: "",
            music: { connect: { id: music?.id } },
          },
        ],
      },
      bookmarks: {
        create: {
          resource: {
            create: {
              unionType: "Music",
              music: { connect: { id: music?.id } },
            },
          },
        },
      },
      issues: {
        create: [
          {
            title: "a",
            body: "b",
            music: { connect: { id: music?.id } },
            comments: {
              create: {
                body: "",
                unionType: "Pull",
                user: { connect: { id: newUser?.id } },
              },
            },
          },
        ],
      },
      carts: {
        create: { music: { connect: { id: music?.id } } },
      },
      transactions: {
        create: {
          type: "PURCHASE",
          amount: 300,
          stripePaymentIntentId: null,
        },
      },
      reports: {
        create: {
          type: "COPYRIGHT",
          body: "",
          unionType: "Music",
        },
      },
      followers: { create: { following: { create: { name: "test" } } } },
      following: {
        create: {
          follower: {
            create: {
              name: "test",
            },
          },
        },
      },
      opponents: {
        create: {
          end: new Date(),
          pull: {
            create: {
              title: "",
              body: "",
              original: "",
              changed: "",
              music: { connect: { id: music.id } },
            },
          },
        },
      },
      proponents: {
        create: {
          end: new Date(),
          pull: {
            create: {
              title: "",
              body: "",
              original: "",
              changed: "",
              music: { connect: { id: music.id } },
            },
          },
        },
      },
    },
  });

  await prisma.user.delete({ where: { id: newUser?.id } });
  await expect(
    await prisma.user.findFirst({ where: { id: newUser?.id } })
  ).toEqual(null);
});
