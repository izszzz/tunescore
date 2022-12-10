import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import MusicLayout from "../../../../../components/layouts/show/music";
import { trpc } from "../../../../../utils/trpc";

const Issue: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data: musicData } = trpc.useQuery(
    ["music.show", { where: { id: router.query.id as string } }],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  const { data: issueData } = trpc.useQuery(
    ["issue.show", { where: { id: router.query.pullId as string } }],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  if (!musicData || !issueData) return <></>;
  return (
    <MusicLayout
      data={musicData}
      bookmarked={musicData.bookmarked}
      activeTab="issues"
    >
      <p>issue</p>
    </MusicLayout>
  );
};

export default Issue;
