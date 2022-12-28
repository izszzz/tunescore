import React from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import { trpc } from "../../../../../utils/trpc";
import MusicLayout from "../../../../../components/layouts/show/music";
import CommentCard from "../../../../../components/elements/card/comment";
import ArticleCard from "../../../../../components/elements/card/article";
import type { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import type { NextPage } from "next";
import CommentForm from "../../../../../components/elements/form/comment";
import { Prisma } from "@prisma/client";
import { musicShowPath } from "../../../../../paths/musics/[id]";

const Issue: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const userId = session.data?.user?.id;
  const create = trpc.useMutation(["comment.createOneComment"]);
  const path = musicShowPath({
    id: router.query.id as string,
    userId,
  });
  const music = trpc.useQuery(path, {
    onError: () => {
      enqueueSnackbar("music.show error");
    },
  });
  const issue = trpc.useQuery(
    [
      "issue.findUniqueIssue",
      {
        where: { id: router.query.issueId as string },
        include: {
          comments: {
            where: { resourceType: "Issue" },
            include: { user: true },
          },
        },
      },
    ],
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
  const { id, title, body, comments } = issueData;
  return (
    <MusicLayout data={musicData} path={path} activeTab="issues">
      <ArticleCard title={title} body={body} />
      {comments.map((comment) => (
        <CommentCard data={comment} />
      ))}
      <CommentForm
        formContainerProps={{
          onSuccess: (data) =>
            create.mutate({
              data: {
                ...data,
                resourceType: "Issue",
                issue: { connect: { id } },
                user: { connect: { id: userId } },
              },
            }),
        }}
        loading={create.isLoading}
      />
    </MusicLayout>
  );
};

export default Issue;
