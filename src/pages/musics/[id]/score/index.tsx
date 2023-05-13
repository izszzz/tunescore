import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import ScoreLayout from "../../../../components/layouts/score";
import { trpc } from "../../../../utils/trpc";

const Score: NextPage = () => {
  const {
    query: { id },
  } = useRouter<"/musics/[id]/score">();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.music.findUniqueMusic.useQuery(
    { where: { id } },
    { onError: () => enqueueSnackbar("music.show error") }
  );
  if (!data) return null;
  return <ScoreLayout value={data.score || ""} />;
};

export default Score;
