import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import { trpc } from "../../../utils/trpc";
import SingleRowForm from "../../../components/elements/form/single_row";
import BandLayout from "../../../components/layouts/show/band";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { bandShowPath } from "../../../paths/bands/[id]";
import { useSession } from "next-auth/react";
const EditBand: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const path = bandShowPath({
    id: router.query.id as string,
    userId: session.data?.user?.id,
  });
  const query = path[1];
  const { data } = trpc.useQuery(path);
  const update = trpc.useMutation(`band.updateOneBand`, {
    onSuccess: (data) => {
      queryClient.setQueryData<typeof data>(path, data);
      enqueueSnackbar("music.update success");
    },
    onError: () => {
      enqueueSnackbar("music.update error");
    },
  });
  if (!data) return <></>;
  const bandData = data as Prisma.BandGetPayload<{
    include: {
      artists: true;
      musics: {
        include: {
          band: true;
          composers: true;
          lyrists: true;
        };
      };
      bookmarks: true;
      tagMaps: { include: { tag: true } };
    };
  }>;
  return (
    <BandLayout data={bandData} path={path} activeTab="settings">
      <SingleRowForm
        data={bandData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ name }) => update.mutate({ ...query, data: { name } }),
        }}
        textFieldElementProps={{
          name: "name",
        }}
      />
    </BandLayout>
  );
};
export default EditBand;
