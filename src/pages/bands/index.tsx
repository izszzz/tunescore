import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import BandLists from "../../components/elements/list/band";
import IndexLayout from "../../components/layouts/index/default";
import { trpc } from "../../utils/trpc";
import setLocale from "../../helpers/locale";
import { bandPaginationPath } from "../../paths/bands";
import type { NextPage } from "next";

const Bands: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.useQuery(undefined, bandPaginationPath({ router, session }));
  const search = trpc.search.band.useMutation({
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  if (!data) return <></>;
  return (
    <IndexLayout
      newRoute={{ pathname: "/bands/new" }}
      route={{ pathname: "/bands" }}
      meta={data.meta}
      searchAutocompleteProps={{
        options: search.data || [],
        loading: search.isLoading,
        getOptionLabel: (option) => setLocale(option.name, router),
        textFieldProps: {
          onChange: (e) =>
            search.mutate({
              where: {
                name: {
                  is: { [router.locale]: { contains: e.currentTarget.value } },
                },
              },
              take: 10,
            }),
        },
      }}
    >
      <BandLists data={data.data} />
    </IndexLayout>
  );
};

export default Bands;
