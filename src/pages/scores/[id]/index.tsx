import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import ScoreLayout from "../../../components/layouts/score";
import { trpc } from "../../../utils/trpc";
import type { NextPage } from "next";
import { getRouterId } from "../../../helpers/router";

const Score: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.useQuery(
    ["music.findUniqueMusic", { where: { id: getRouterId(router) } }],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  if (!data) return <></>;
  return <ScoreLayout value={data.score || ""} />;
};

export default Score;
