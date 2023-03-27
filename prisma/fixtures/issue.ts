import { PrismaClient } from "@prisma/client";

import { UserFactory } from "./user";

const prisma = new PrismaClient();

export const IssueFactory = async () =>
  await prisma.music.create({
    data: {
      resource: {
        create: {
          name: { create: { ja: "Issue", en: "Issue" } },
          unionType: "Music",
        },
      },
      type: "ORIGINAL",
      visibillity: "PUBLIC",
      issues: {
        create: [
          {
            title: "OPEN",
            body: "OPEN",
            user: {
              connect: { id: (await UserFactory).id },
            },
          },
          {
            title: "CLOSE",
            body: "CLOSE",
            status: "CLOSE",
            user: {
              connect: { id: (await UserFactory).id },
            },
          },
          {
            title: "Comment",
            body: "Comment",
            user: {
              connect: { id: (await UserFactory).id },
            },
            comments: {
              create: {
                body: "Body",
                user: {
                  connect: { id: (await UserFactory).id },
                },
                unionType: "Issue",
              },
            },
          },
        ],
      },
    },
  });
