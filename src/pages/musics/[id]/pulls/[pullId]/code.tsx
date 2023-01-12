import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";
import ReactDiffViewer from "react-diff-viewer";
import MusicLayout from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { trpc } from "../../../../../utils/trpc";
import { musicShowQuery } from "../../../../../paths/musics/[id]";
import type { PullLayoutProps } from "../../../../../components/layouts/show/pull";
import type { MusicLayoutProps } from "../../../../../components/layouts/show/music";
import type { NextPage } from "next";

const Code: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const query = musicShowQuery({ router, session });
  const music = trpc.music.findUniqueMusic.useQuery(query, {
    onError: () => {
      enqueueSnackbar("music.show error");
    },
  });
  const pull = trpc.pull.findUniquePull.useQuery(
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
