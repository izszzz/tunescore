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
import { trpc } from "../../../../../utils/trpc";


const Code: NextPage = () => {
  const router = useRouter(),
    { enqueueSnackbar } = useSnackbar(),
    query = musicShowQuery({ router, session: useSession().data }),
    music = trpc.music.findUniqueMusic.useQuery(query, {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }),
    pull = trpc.pull.findUniquePull.useQuery(
      {
        where: { id: router.query.pullId as string },
        include: { user: true, music: true },
      },
      {
        onError: () => {
          enqueueSnackbar("music.show error");
        },
      }
    );
  if (!music.data || !pull.data) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  const pullData = pull.data as PullLayoutProps["data"];
  return (
    <MusicLayout data={musicData} query={query} activeTab="pullrequests">
      <PullLayout data={pullData} activeTab="code">
        <ReactDiffViewer
          oldValue={pullData.score.original}
          newValue={pullData.score.changed}
        />
      </PullLayout>
    </MusicLayout>
  );
};

export default Code;
