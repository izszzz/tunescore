import { defineIssueFactory } from "../generated/fabbrica";

import { MusicFactory } from "./music";
import { UserFactory } from "./user";

export const defineIssueUserFactory = (
    defaultData: Omit<
      NonNullable<Parameters<typeof defineIssueFactory>[0]>["defaultData"],
      "user"
    >
  ) =>
    defineIssueFactory({
      defaultData: {
        user: UserFactory,
        music: MusicFactory,
        ...defaultData,
      },
    }),
  IssueOpenFactory = defineIssueUserFactory({
    title: "OPEN",
    body: "OPEN",
  }),
  IssueCloseFactory = defineIssueUserFactory({
    title: "CLOSE",
    body: "CLOSE",
  }),
  IssueHasCommentsFactory = defineIssueUserFactory({
    title: "Comment",
    body: "Comment",
    comments: {
      create: {
        body: "Body",
        user: UserFactory,
        unionType: "Issue",
      },
    },
  });
