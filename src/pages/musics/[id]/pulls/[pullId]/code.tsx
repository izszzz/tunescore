import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import React from "react";
import ReactDiffViewer from "react-diff-viewer";
import MusicLayout, {
  MusicLayoutProps,
} from "../../../../../components/layouts/show/music";
import PullLayout, {
  PullLayoutProps,
} from "../../../../../components/layouts/show/pull";
import { trpc } from "../../../../../utils/trpc";

const Code: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
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
        include: { user: true, music: true },
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
  const pullData = pull.data as PullLayoutProps["data"];
  return (
    <MusicLayout data={musicData} activeTab="pullrequests">
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
