import React from "react";

import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import ArticleCard from "../../../../../components/elements/card/article";
import CommentCard from "../../../../../components/elements/card/comment";
import CommentForm from "../../../../../components/elements/form/comment";
import ResourceShowLayout from "../../../../../components/layouts/show/resource";
import { resourceMusicShowQuery } from "../../../../../helpers/resource";
import type { userArgs } from "../../../../../helpers/user";
import { getCurrentUserId } from "../../../../../helpers/user";
import { trpc } from "../../../../../utils/trpc";

const Issue: NextPage = () => {
  const router = useRouter<"/musics/[id]/issues/[issueId]">(),
    { issueId } = router.query,
    { enqueueSnackbar } = useSnackbar(),
    { data: session } = useSession(),
    userId = getCurrentUserId(session),
    create = trpc.comment.createOneComment.useMutation(),
    issue = trpc.issue.findUniqueIssue.useQuery(
      {
        where: { id: issueId },
        include: {
          comments: { where: { unionType: "Issue" }, include: { user: true } },
        },
      },
      { onError: () => enqueueSnackbar("music.show error") }
    );
  if (!issue.data) return null;
  const issueData = issue.data as Prisma.IssueGetPayload<{
    include: { comments: { include: { user: typeof userArgs } } };
  }>;
  const { title, body, comments } = issueData;
  return (
    <ResourceShowLayout activeTab="issues" getQuery={resourceMusicShowQuery}>
      {() => (
        <>
          <ArticleCard body={body} title={title} />
          {comments.map((comment) => (
            <CommentCard data={comment} key={comment.id} />
          ))}
          <CommentForm
            formContainerProps={{
              onSuccess: (data) =>
                create.mutate({
                  data: {
                    ...data,
                    unionType: "Issue",
                    issue: { connect: { id: issueId } },
                    user: { connect: { id: userId } },
                    notifications: {
                      create: {
                        unionType: "Comment",
                        user: { connect: { id: userId } },
                      },
                    },
                  },
                }),
            }}
            loading={create.isLoading}
          />
        </>
      )}
    </ResourceShowLayout>
  );
};

export default Issue;
