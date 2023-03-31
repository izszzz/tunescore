import React from "react";
import ReactDiffViewer from "react-diff-viewer-continued";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import MusicLayout from "../../../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import type { PullLayoutProps } from "../../../../../components/layouts/show/pull";
import { musicShowQuery } from "../../../../../paths/musics/[id]";
import { pullShowQuery } from "../../../../../paths/musics/[id]/pulls/[pullId]";
import { trpc } from "../../../../../utils/trpc";

const Code: NextPage = () => {
  const router = useRouter<"/musics/[id]/pulls/[pullId]">(),
    { data: session } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    query = musicShowQuery({ router, session: useSession().data }),
    pullQuery = pullShowQuery({ router, session }),
    music = trpc.resource.findUniqueResource.useQuery(query, {
      onError: () => enqueueSnackbar("music.show error"),
    }),
    pull = trpc.pull.findUniquePull.useQuery(pullQuery, {
      onError: () => enqueueSnackbar("music.show error"),
    });
  if (!music.data || !pull.data) return <></>;
  const musicData = music.data as MusicLayoutProps["data"],
    pullData = pull.data as PullLayoutProps["data"];
  return (
    <MusicLayout activeTab="pullrequests" data={musicData} query={query}>
      <PullLayout activeTab="code" data={pullData} query={pullQuery}>
        <ReactDiffViewer
          newValue={pullData.changed}
          oldValue={pullData.original}
        />
      </PullLayout>
    </MusicLayout>
  );
};

export default Code;
