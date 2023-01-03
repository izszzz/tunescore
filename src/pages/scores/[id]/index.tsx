import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import ScoreLayout from "../../../components/layouts/score";
import { trpc } from "../../../utils/trpc";
import { getRouterId } from "../../../helpers/router";
import type { NextPage } from "next";

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
