import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import ScoreEditor from "../../../components/elements/editor/score";
import { trpc } from "../../../utils/trpc";
import { getRouterId } from "../../../helpers/router";
import type { NextPage } from "next";

const ScoreEdit: NextPage = () => {
  const router = useRouter();
  const id = getRouterId(router);
  const { enqueueSnackbar } = useSnackbar();
    const { data } = trpc.music.findUniqueMusic.useQuery({ where: { id } }, {
        onError: () => {
            enqueueSnackbar("music.show error");
        },
    });
  const update = trpc.music.updateOneMusic.useMutation();
  if (!data) return <></>;
  return (
    <ScoreEditor
      defaultValue={data.score || ""}
      onSave={(value) =>
        update.mutate({
          where: { id },
          data: { score: value },
        })
      }
    />
  );
};

export default ScoreEdit;
