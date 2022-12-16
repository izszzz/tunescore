import type { NextPage } from "next";
import ScoreEditor from "../../../components/elements/editor/score";
import { trpc } from "../../../utils/trpc";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

const ScoreEdit: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.useQuery(
    ["music.findUniqueMusic", { where: { id: router.query.id as string } }],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  const update = trpc.useMutation(["music.updateOneMusic"]);
  if (!data) return <></>;
  return (
    <ScoreEditor
      defaultValue={data.score || ""}
      onSave={(value) =>
        update.mutate({
          where: { id: router.query.id as string },
          data: { score: value },
        })
      }
    />
  );
};

export default ScoreEdit;
