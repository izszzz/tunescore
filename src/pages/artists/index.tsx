import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import ArtistLists from "../../components/elements/list/artist";
import ArtistListItem from "../../components/elements/list/item/artist";
import IndexLayout from "../../components/layouts/index/default";
import setLocale from "../../helpers/locale";
import { artistPaginationPath } from "../../paths/artists";
import { trpc } from "../../utils/trpc";

const Artists: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.search.artist.useMutation({
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  const { data } = trpc.pagination.artist.useQuery(
    artistPaginationPath({ router, session: useSession().data })
  );
  if (!data) return <></>;
  return (
    <IndexLayout
      meta={data.meta}
      searchAutocompleteProps={{
        options: search.data || [],
        loading: search.isLoading,
        renderOption: (_props, option) => (
          <ArtistListItem data={option} dense />
        ),
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
