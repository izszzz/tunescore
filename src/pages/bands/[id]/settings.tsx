import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useSnackbar } from "notistack";
import { trpc } from "../../../utils/trpc";
import SingleRowForm from "../../../components/elements/form/single_row";
import BandLayout from "../../../components/layouts/show/band";
import { createPath } from "../../../helpers/createPath";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
const EditBand: NextPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const path = createPath([
    "band.findUniqueBand",
    {
      where: { id: router.query.id as string },
      include: {
        artists: true,
        musics: {
          include: {
            band: true,
            composers: true,
            lyrists: true,
          },
        },
      },
    },
  ]);
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
    };
  }>;
  return (
    <BandLayout data={bandData} activeTab="settings">
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
