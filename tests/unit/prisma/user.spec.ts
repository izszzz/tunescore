import { expect, test } from "@playwright/test";
import type { User } from "@prisma/client";

import { prisma } from "../../../src/server/db/client";

import { userFactory } from "./fixtures/user";

test.describe.serial("User", () => {
  let newUser: User;
  test("should create new User", async () => {
    newUser = await prisma.user.create({ data: userFactory.build() });
    await expect(newUser?.name).toEqual(userFactory.build().name);
  });

  test("should delete User", async () => {
    await prisma.user.delete({ where: { id: newUser?.id } });
    const user = await prisma.user.findFirst({ where: { id: newUser?.id } });
    await expect(user).toEqual(null);
  });
});

test.describe.serial("onDelete", () => {
  test("User & Pull[]", async () => {
    const newUser = await prisma.user.create({
      data: { name: "user" },
    });
    await prisma.music.create({
      data: {
        type: "ORIGINAL",
        visibillity: "PUBLIC",
        resource: { create: { unionType: "Music" } },
        pulls: {
          create: [
            {
              title: "a",
              body: "b",
              original: "",
              changed: "",
              user: { connect: { id: newUser?.id } },
            },
          ],
        },
      },
    });
    await prisma.user.delete({ where: { id: newUser?.id } });
    const user = await prisma.user.findFirst({ where: { id: newUser?.id } });
    await expect(user).toEqual(null);
  });
});
