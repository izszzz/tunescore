import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import ScoreEditor from "../../../../components/elements/editor/score";
import { trpc } from "../../../../utils/trpc";

const ScoreEdit: NextPage = () => {
  const {
    query: { id },
  } = useRouter<"/musics/[id]/score">();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.music.findUniqueMusic.useQuery(
    { where: { id } },
    { onError: () => enqueueSnackbar("music.show error") }
  );
  const update = trpc.music.updateOneMusic.useMutation();
  if (!data) return <></>;
  return (
    <ScoreEditor
      backRoute={{
        pathname: "/musics/[id]",
        query: { id },
      }}
      defaultValue={data.score || ""}
      onSave={(value) =>
        update.mutate({ where: { id }, data: { score: value } })
      }
    />
  );
};

export default ScoreEdit;
