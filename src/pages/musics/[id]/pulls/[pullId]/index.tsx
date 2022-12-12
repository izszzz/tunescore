import React from "react";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MusicLayout, {
  MusicLayoutProps,
} from "../../../../../components/layouts/show/music";
import PullLayout from "../../../../../components/layouts/show/pull";
import { trpc } from "../../../../../utils/trpc";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

const Markdown = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});
const Pull: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
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
        },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  const { data: pullData } = trpc.useQuery(
    ["pull.show", { where: { id: router.query.pullId as string } }],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  if (!music.data || !pullData) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} activeTab="pullrequests">
      <PullLayout data={pullData} activeTab="conversation">
        <Markdown source={pullData.body} />
      </PullLayout>
    </MusicLayout>
  );
};

export default Pull;
