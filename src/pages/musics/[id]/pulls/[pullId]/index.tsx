import React from "react";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import ArticleCard from "../../../../../components/elements/card/article";
import CommentCard from "../../../../../components/elements/card/comment";
import CommentForm from "../../../../../components/elements/form/comment";
import MusicLayout from "../../../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import type { PullLayoutProps } from "../../../../../components/layouts/show/pull";
import PullLayout from "../../../../../components/layouts/show/pull";
import { getCurrentUserId } from "../../../../../helpers/user";
import { musicShowQuery } from "../../../../../paths/musics/[id]";
import { pullShowQuery } from "../../../../../paths/musics/[id]/pulls/[pullId]";
import { trpc } from "../../../../../utils/trpc";

const Pull: NextPage = () => {
  const router = useRouter<"/musics/[id]/pulls/[pullId]">(),
    { enqueueSnackbar } = useSnackbar(),
    { data: session } = useSession(),
    userId = getCurrentUserId(session),
    create = trpc.comment.createOneComment.useMutation(),
    query = musicShowQuery({ router, session }),
    pullQuery = pullShowQuery({ router, session }),
    music = trpc.resource.findUniqueResource.useQuery(query, {
      onError: () => enqueueSnackbar("music.show error"),
    }),
    pull = trpc.pull.findUniquePull.useQuery(pullQuery, {
      onError: () => enqueueSnackbar("pull.show error"),
    });
  if (!music.data || !pull.data) return <></>;
  const musicData = music.data as MusicLayoutProps["data"],
    pullData = pull.data as PullLayoutProps["data"],
    { id, title, body, comments } = pullData;
  return (
    <MusicLayout activeTab="pullrequests" data={musicData} query={query}>
      <PullLayout activeTab="conversation" data={pullData} query={pullQuery}>
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
                  unionType: "Pull",
                  pull: { connect: { id } },
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
      </PullLayout>
    </MusicLayout>
  );
};

export default Pull;
