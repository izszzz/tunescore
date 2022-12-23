import { useRouter } from "next/router";
import React from "react";
import ScoreEditor from "../../../../../../components/elements/editor/score";
import { trpc } from "../../../../../../utils/trpc";
import type { NextPage } from "next";

const Pull: NextPage = () => {
  const router = useRouter();
  const pullQuery = trpc.useQuery([
    "pull.findUniquePull",
    { where: { id: router.query.pullId as string } },
  ]);
  const update = trpc.useMutation(["pull.updateOnePull"]);
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
