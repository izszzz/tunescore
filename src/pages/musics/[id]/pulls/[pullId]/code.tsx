import React from "react";
import ReactDiffViewer from "react-diff-viewer-continued";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import PullLayout from "../../../../../components/layouts/show/pull";
import type { PullLayoutProps } from "../../../../../components/layouts/show/pull";
import ResourceShowLayout from "../../../../../components/layouts/show/resource";
import { pullShowQuery } from "../../../../../paths/musics/[id]/pulls/[pullId]";
import { trpc } from "../../../../../utils/trpc";

const Code: NextPage = () => {
  const router = useRouter<"/musics/[id]/pulls/[pullId]">(),
    { data: session } = useSession(),
    { enqueueSnackbar } = useSnackbar(),
    pullQuery = pullShowQuery({ router, session }),
    pull = trpc.pull.findUniquePull.useQuery(pullQuery, {
      onError: () => enqueueSnackbar("music.show error"),
    });
  if (!pull.data) return <></>;
  const pullData = pull.data as PullLayoutProps["data"];
  return (
    <ResourceShowLayout activeTab="pullrequests">
      {() => (
        <PullLayout activeTab="code" data={pullData} query={pullQuery}>
          <ReactDiffViewer
            newValue={pullData.changed}
            oldValue={pullData.original}
          />
        </PullLayout>
      )}
    </ResourceShowLayout>
  );
};

export default Code;
