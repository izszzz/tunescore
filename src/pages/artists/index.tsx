import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import IndexLayout from "../../components/layouts/index/default";
import ArtistLists from "../../components/elements/list/artist";
import { trpc } from "../../utils/trpc";
import setLocale from "../../helpers/locale";
import { artistPaginationPath } from "../../paths/artists";
import type { NextPage } from "next";

const Artists: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.search.artist.useMutation({
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  const { data } = trpc.pagination.artist.useQuery(
    artistPaginationPath({ router, session })
  );
  if (!data) return <></>;
  return (
    <IndexLayout
      route={{ pathname: "/artists" }}
      newRoute={{ pathname: "/artists/new" }}
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
      <ArtistLists data={data.data} />
    </IndexLayout>
  );
};

export default Artists;
