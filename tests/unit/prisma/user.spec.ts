import { expect, test } from "@playwright/test";
import type { User } from "@prisma/client";

import { prisma } from "../../../src/server/db/client";

import { userFactory } from "./fixtures/user";

const createUser = () => prisma.user.create({ data: userFactory.build() }),
  shouldDeletedUser = async (id: string | undefined) => {
    await prisma.user.delete({ where: { id } });
    const user = await prisma.user.findFirst({ where: { id } });
    await expect(user).toEqual(null);
  };
test.describe.serial("User", async () => {
  let newUser: User;
  test("should create new User", async () => {
    newUser = await createUser();
    await expect(newUser?.name).toEqual(userFactory.build().name);
  });

  test("should delete User", () => shouldDeletedUser(newUser?.id));
});

test("onDelete", async () => {
  const newUser = await createUser();
  const music = await prisma.music.create({
    data: {
      type: "ORIGINAL",
      visibillity: "PUBLIC",
      resource: {
        create: {
          unionType: "Music",
          bookmarks: {
            create: {
              user: { connect: { id: newUser?.id } },
            },
          },
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
      followers: {
        create: {
          following: {
            create: {
              name: "test",
            },
          },
        },
      },
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
  await shouldDeletedUser(newUser?.id);
});
