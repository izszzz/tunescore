import React from "react";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import ArticleCard from "../../../../../components/elements/card/article";
import CommentCard from "../../../../../components/elements/card/comment";
import CommentForm from "../../../../../components/elements/form/comment";
import type { PullLayoutProps } from "../../../../../components/layouts/show/pull";
import PullLayout from "../../../../../components/layouts/show/pull";
import ResourceShowLayout from "../../../../../components/layouts/show/resource";
import { resourceMusicShowQuery } from "../../../../../helpers/resource";
import { getCurrentUserId } from "../../../../../helpers/user";
import { pullShowQuery } from "../../../../../paths/musics/[id]/pulls/[pullId]";
import { trpc } from "../../../../../utils/trpc";

const Pull: NextPage = () => {
  const router = useRouter<"/musics/[id]/pulls/[pullId]">(),
    { enqueueSnackbar } = useSnackbar(),
    { data: session } = useSession(),
    userId = getCurrentUserId(session),
    create = trpc.comment.createOneComment.useMutation(),
    pullQuery = pullShowQuery({ router, session }),
    pull = trpc.pull.findUniquePull.useQuery(pullQuery, {
      onError: () => enqueueSnackbar("pull.show error"),
    });
  if (!pull.data) return null;
  const pullData = pull.data as PullLayoutProps["data"],
    { id, title, body, comments } = pullData;
  return (
    <ResourceShowLayout
      activeTab="pullrequests"
      getQuery={resourceMusicShowQuery}
    >
      {() => (
        <PullLayout activeTab="conversation" data={pullData} query={pullQuery}>
          <Stack spacing={3}>
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
          </Stack>
        </PullLayout>
      )}
    </ResourceShowLayout>
  );
};

export default Pull;
