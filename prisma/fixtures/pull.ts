import { PrismaClient } from "@prisma/client";

import { UserFactory } from "./user";

const prisma = new PrismaClient();

export const PullFactory = async () =>
  await prisma.music.create({
    data: {
      title: { ja: "Pull", en: "Pull" },
      type: "ORIGINAL",
      visibility: "PUBLIC",
      pulls: {
        create: [
          {
            title: "DRAFT",
            body: "DRAFT",
            status: "DRAFT",
            score: {
              original: "",
              changed: "",
            },
            user: {
              connect: { id: (await UserFactory).id },
            },
          },
          {
            title: "OPEN",
            body: "OPEN",
            status: "OPEN",
            score: {
              original: "",
              changed: "",
            },
            user: {
              connect: { id: (await UserFactory).id },
            },
          },
          {
            title: "VOTE",
            body: "VOTE",
            status: "VOTE",
            score: {
              original: "",
              changed: "",
            },
            user: {
              connect: { id: (await UserFactory).id },
            },
          },
          {
            title: "CLOSE",
            body: "CLOSE",
            status: "CLOSE",
            score: {
              original: "",
              changed: "",
            },
            user: {
              connect: { id: (await UserFactory).id },
            },
          },
          {
            title: "MERGE",
            body: "MERGE",
            status: "MERGE",
            score: {
              original: "",
              changed: "",
            },
            user: {
              connect: { id: (await UserFactory).id },
            },
          },
          {
            title: "Comment",
            body: "Comment",
            status: "DRAFT",
            score: {
              original: "",
              changed: "",
            },
            user: {
              connect: { id: (await UserFactory).id },
            },
            comments: {
              create: {
                body: "Body",
                user: {
                  connect: { id: (await UserFactory).id },
                },
                unionType: "Pull",
              },
            },
          },
        ],
      },
    },
  });
