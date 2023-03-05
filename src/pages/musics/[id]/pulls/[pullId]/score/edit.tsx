import React, { useEffect, useState } from "react";

import type { Prisma } from "@prisma/client";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import * as Diff3 from "node-diff3";
import { useSnackbar } from "notistack";

import ScoreEditor from "../../../../../../components/elements/editor/score";
import { getRouterId, getRouterPullId } from "../../../../../../helpers/router";
import { trpc } from "../../../../../../utils/trpc";

const PullScoreEdit: NextPage = () => {
  const [conflict, setConflict] = useState(false),
    router = useRouter(),
    id = getRouterId(router),
    pullId = getRouterPullId(router),
    queryClient = useQueryClient(),
    { enqueueSnackbar } = useSnackbar(),
    query = {
      where: { id: pullId },
      include: { music: true },
    },
    { data } = trpc.pull.findUniquePull.useQuery(query),
    update = trpc.pull.updateOnePull.useMutation({
      onSuccess: () => {
        queryClient.setQueryData<typeof data>(
          getQueryKey(trpc.pull.findUniquePull, query, "query"),
          (prev) => prev && { ...prev, carts: [data] }
        );
        enqueueSnackbar("pull.update success");
      },
    });
  useEffect(() => {
    if (!data) return;
    const pullData = data as Prisma.PullGetPayload<{
      include: { music: true };
    }>;
    const merged = Diff3.mergeDiff3(
      encodeURIComponent(pullData.music.score || ""),
      encodeURIComponent(pullData.score.original),
      encodeURIComponent(pullData.score.changed),
      {
        label: {
          a: "current",
          o: "original",
          b: "changed",
        },
      }
    );
    setConflict(merged.conflict);
  }, [data]);
  if (!data) return <></>;
  const pullData = data as Prisma.PullGetPayload<{ include: { music: true } }>;
  const handleResolve = () => {
      const merged = Diff3.mergeDiff3(
        encodeURIComponent(pullData.music.score || ""),
        encodeURIComponent(pullData.score.original),
        encodeURIComponent(pullData.score.changed),
        {
          label: {
            a: "current",
            o: "original",
            b: "changed",
          },
        }
      );
      return merged.result.map((str) => decodeURIComponent(str)).join("\r");
    },
    handleSave = (value: string) =>
      update.mutate({
        where: { id: pullId },
        data: {
          score: {
            update: {
              changed: value,
              ...(conflict ? { original: pullData.music.score || "" } : {}),
            },
          },
        },
      });
  return (
    <ScoreEditor
      backRoute={{
        pathname: "/musics/[id]/pulls/[pullId]",
        query: { id, pullId },
      }}
      conflict={conflict}
      defaultValue={pullData.score.changed}
      onSave={handleSave}
      onResolve={handleResolve}
    />
  );
};
export default PullScoreEdit;
