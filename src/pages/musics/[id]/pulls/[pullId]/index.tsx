import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import MusicLayout from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { trpc } from "../../../../../utils/trpc";
import type { PullLayoutProps } from "../../../../../components/layouts/show/pull";
import type { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import ArticleCard from "../../../../../components/elements/card/article";
import { Prisma } from "@prisma/client";
import CommentCard from "../../../../../components/elements/card/comment";
import CommentForm from "../../../../../components/elements/form/comment";

const Pull: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const userId = session.data?.user?.id;
  const create = trpc.useMutation(["comment.createOneComment"]);
  const music = trpc.useQuery(
    [
      "music.findUniqueMusic",
      {
        where: { id: router.query.id as string },
        include: {
          user: true,
          band: true,
          artists: true,
          composers: true,
          lyrists: true,
          bookmarks: { where: { id: session.data?.user?.id } },
        },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  const pull = trpc.useQuery(
    [
      "pull.findUniquePull",
      {
        where: { id: router.query.pullId as string },
        include: { user: true, music: true, vote: true, comments: true },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  if (!music.data || !pull.data) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  const pullData = pull.data as Prisma.PullGetPayload<{
    include: {
      music: true;
      user: true;
      vote: true;
      comments: {
        include: {
          user: true;
        };
      };
    };
  }>;
  const { id, title, body, comments } = pullData;
  return (
    <MusicLayout data={musicData} activeTab="pullrequests">
      <PullLayout data={pullData} activeTab="conversation">
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
                  resourceType: "Pull",
                  issue: { connect: { id } },
                  user: { connect: { id: userId } },
                },
              }),
          }}
          loading={create.isLoading}
        />
      </PullLayout>
    </MusicLayout>
  );
};

export default Pull;
