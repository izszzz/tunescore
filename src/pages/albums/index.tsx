import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import AlbumLists from "../../components/elements/list/album";
import AlbumListItem from "../../components/elements/list/item/album";
import IndexLayout from "../../components/layouts/index/default";
import setLocale from "../../helpers/locale";
import { albumPaginationQuery } from "../../paths/albums";
import { trpc } from "../../utils/trpc";

const Albums: NextPage = () => {
  const router = useRouter(),
    { enqueueSnackbar } = useSnackbar(),
    { data } = trpc.pagination.album.useQuery(
      albumPaginationQuery({ router, session: useSession().data })
    ),
    search = trpc.search.album.useMutation({
      onError: () => enqueueSnackbar("music.search error"),
    });
  if (!data) return <></>;
  return (
    <IndexLayout
      meta={data.meta}
      searchAutocompleteProps={{
        options: search.data || [],
        loading: search.isLoading,
        renderOption: (_props, option) => <AlbumListItem data={option} dense />,
        getOptionLabel: ({ title }) => setLocale(title, router),
        textFieldProps: {
          onChange: ({ currentTarget: { value: v } }) =>
            search.mutate({
              where: { title: { is: { [router.locale]: { contains: v } } } },
              take: 10,
            }),
        },
      }}
    >
      <AlbumLists data={data.data} />
    </IndexLayout>
  );
};

export default Albums;
