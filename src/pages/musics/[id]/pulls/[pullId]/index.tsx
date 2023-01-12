import React from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ArticleCard from "../../../../../components/elements/card/article";
import { trpc } from "../../../../../utils/trpc";
import PullLayout from "../../../../../components/layouts/show/pull";
import MusicLayout from "../../../../../components/layouts/show/music";
import CommentCard from "../../../../../components/elements/card/comment";
import CommentForm from "../../../../../components/elements/form/comment";
import { musicShowQuery } from "../../../../../paths/musics/[id]";
import type { NextPage } from "next";
import type { Prisma } from "@prisma/client";
import type { MusicLayoutProps } from "../../../../../components/layouts/show/music";

const Pull: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const userId = session.data?.user?.id;
  const create = trpc.comment.createOneComment.useMutation();
  const query = musicShowQuery({ router, session });
  const music = trpc.music.findUniqueMusic.useQuery(query, {
    onError: () => {
      enqueueSnackbar("music.show error");
    },
  });
  const pull = trpc.pull.findUniquePull.useQuery(
    {
      where: { id: router.query.pullId as string },
      include: { user: true, music: true, vote: true, comments: true },
    },
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
    <MusicLayout data={musicData} query={query} activeTab="pullrequests">
      <PullLayout data={pullData} activeTab="conversation">
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
                  resourceType: "Pull",
                  pull: { connect: { id } },
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
      </PullLayout>
    </MusicLayout>
  );
};

export default Pull;
