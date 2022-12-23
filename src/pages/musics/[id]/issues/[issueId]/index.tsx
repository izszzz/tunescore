import React from "react";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { trpc } from "../../../../../utils/trpc";
import MusicLayout from "../../../../../components/layouts/show/music";
import type {
  MusicLayoutProps,
} from "../../../../../components/layouts/show/music";
import type { NextPage } from "next";

const Issue: NextPage = () => {
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
  const { data: issueData } = trpc.useQuery(
    ["issue.findUniqueIssue", { where: { id: router.query.pullId as string } }],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  if (!music.data || !issueData) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} activeTab="issues">
      <Card variant="outlined">
        <Typography />
      </Card>
    </MusicLayout>
  );
};

export default Issue;
