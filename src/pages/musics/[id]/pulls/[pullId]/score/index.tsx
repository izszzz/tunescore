import type { NextPage } from "next";
import { useRouter } from "next/router";

import ScoreLayout from "../../../../../../components/layouts/score";
import { trpc } from "../../../../../../utils/trpc";

const Score: NextPage = () => {
  const router = useRouter<"/musics/[id]/pulls/[pullId]">(),
    { data } = trpc.pull.findUniquePull.useQuery({
      where: { id: router.query.pullId },
    });
  if (!data) return <></>;
  return <ScoreLayout value={data.changed} />;
};

export default Score;
