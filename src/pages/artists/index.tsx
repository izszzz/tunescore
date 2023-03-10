import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import ArtistLists from "../../components/elements/list/artist";
import ArtistListItem from "../../components/elements/list/item/artist";
import IndexLayout from "../../components/layouts/index/default";
import { searchMutate } from "../../helpers";
import setLocale from "../../helpers/locale";
import { artistPaginationQuery } from "../../paths/artists";
import { trpc } from "../../utils/trpc";

const Artists: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.search.artist.useMutation({
    onError: () => enqueueSnackbar("music.search error"),
  });
  const { data } = trpc.pagination.artist.useQuery(
    artistPaginationQuery({ router, session: useSession().data })
  );
  if (!data) return <></>;
  return (
    <IndexLayout
      meta={data.meta}
      searchAutocompleteProps={{
        options: search.data || [],
        loading: search.isLoading,
        renderOption: (_props, data) => <ArtistListItem data={data} dense />,
        getOptionLabel: ({ name }) => setLocale(name, router),
        textFieldProps: {
          onChange: ({ currentTarget: { value } }) =>
            search.mutate(searchMutate(router, "name", value)),
        },
      }}
    >
      <ArtistLists data={data.data} />
    </IndexLayout>
  );
};

export default Artists;
