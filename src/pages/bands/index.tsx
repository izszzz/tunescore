import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import BandLists from "../../components/elements/list/band";
import IndexLayout from "../../components/layouts/index/default";
import { trpc } from "../../utils/trpc";
import setLocale from "../../helpers/locale";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { bandPaginationPath } from "../../paths/bands";

const Bands: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.useQuery(bandPaginationPath({ router, session }));
  const search = trpc.useMutation(["search.band"], {
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
