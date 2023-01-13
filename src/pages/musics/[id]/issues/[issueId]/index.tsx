import React from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { trpc } from "../../../../../utils/trpc";
import MusicLayout from "../../../../../components/layouts/show/music";
import CommentCard from "../../../../../components/elements/card/comment";
import ArticleCard from "../../../../../components/elements/card/article";
import CommentForm from "../../../../../components/elements/form/comment";
import { musicShowQuery } from "../../../../../paths/musics/[id]";
import { getRouterIssueId } from "../../../../../helpers/router";
import { getCurrentUserId } from "../../../../../helpers/user";
import type { NextPage } from "next";
import type { Prisma } from "@prisma/client";
import type { MusicLayoutProps } from "../../../../../components/layouts/show/music";

const Issue: NextPage = () => {
  const router = useRouter(),
    issueId = getRouterIssueId(router),
    { enqueueSnackbar } = useSnackbar(),
    { data: session } = useSession(),
    userId = getCurrentUserId(session),
    query = musicShowQuery({ router, session }),
    create = trpc.comment.createOneComment.useMutation(),
    music = trpc.music.findUniqueMusic.useQuery(query, {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }),
    issue = trpc.issue.findUniqueIssue.useQuery(
      {
        where: { id: issueId },
        include: {
          comments: {
            where: { resourceType: "Issue" },
            include: { user: true },
          },
        },
      },
      {
        onError: () => {
          enqueueSnackbar("music.show error");
        },
      }
    );
  if (!music.data || !issue.data) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  const issueData = issue.data as Prisma.IssueGetPayload<{
    include: { comments: { include: { user: true } } };
  }>;
  const { title, body, comments } = issueData;
  return (
    <MusicLayout data={musicData} query={query} activeTab="issues">
      <ArticleCard title={title} body={body} />
      {comments.map((comment) => (
        <CommentCard key={comment.id} data={comment} />
      ))}
      <CommentForm
        formContainerProps={{
          onSuccess: (data) =>
            create.mutate({
              data: {
                ...data,
                resourceType: "Issue",
                issue: { connect: { id: issueId } },
                user: { connect: { id: userId } },
                notifications: {
                  create: {
                    resourceType: "Comment",
                    user: {
                      connect: { id: userId },
                    },
                  },
                },
              },
            }),
        }}
        loading={create.isLoading}
      />
    </MusicLayout>
  );
};

export default Issue;
