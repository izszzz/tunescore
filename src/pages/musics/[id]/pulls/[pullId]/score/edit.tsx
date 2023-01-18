import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";

import ScoreEditor from "../../../../../../components/elements/editor/score";
import { trpc } from "../../../../../../utils/trpc";


const Pull: NextPage = () => {
  const router = useRouter();
  const pullQuery = trpc.pull.findUniquePull.useQuery({ where: { id: router.query.pullId as string } });
  const update = trpc.pull.updateOnePull.useMutation();
  const handleSave = (value: string) => {
    update.mutate({
      where: {
        id: router.query.pullId as string,
      },
      data: {
        score: { update: { changed: value } },
      },
    });
  };
  return (
    <ScoreEditor
      defaultValue={pullQuery.data?.score.changed || ""}
      onSave={handleSave}
    />
  );
};
export default Pull;
