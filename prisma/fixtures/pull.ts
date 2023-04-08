import { PrismaClient } from "@prisma/client";

import { UserFactory } from "./user";

const prisma = new PrismaClient();

export const PullFactory = async () =>
  await prisma.music.create({
    data: {
      resource: {
        create: {
          name: { create: { ja: "Pull", en: "Pull" } },
          unionType: "Music",
        },
      },
      type: "ORIGINAL",
      visibillity: "PUBLIC",
      pulls: {
        create: [
          {
            title: "DRAFT",
            body: "DRAFT",
            status: "DRAFT",
            original: "",
            changed: "",
            user: UserFactory,
          },
          {
            title: "OPEN",
            body: "OPEN",
            status: "OPEN",
            original: "",
            changed: "",
            user: UserFactory,
          },
          {
            title: "VOTE",
            body: "VOTE",
            status: "VOTE",
            original: "",
            changed: "",
            user: UserFactory,
          },
          {
            title: "CLOSE",
            body: "CLOSE",
            status: "CLOSE",
            original: "",
            changed: "",
            user: UserFactory,
          },
          {
            title: "MERGE",
            body: "MERGE",
            status: "MERGE",
            original: "",
            changed: "",
            user: UserFactory,
          },
          {
            title: "Comment",
            body: "Comment",
            status: "DRAFT",
            original: "",
            changed: "",
            user: UserFactory,
            comments: {
              create: {
                body: "Body",
                user: UserFactory,
                unionType: "Pull",
              },
            },
          },
        ],
      },
    },
  });
