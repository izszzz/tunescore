import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import AlbumLists from "../../components/elements/list/album";
import IndexLayout from "../../components/layouts/index/default";
import setLocale from "../../helpers/locale";
import { albumPaginationQuery } from "../../paths/albums";
import { trpc } from "../../utils/trpc";

const Albums: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.pagination.album.useQuery(
    albumPaginationQuery({ router, session: useSession().data })
  );
  const search = trpc.search.album.useMutation({
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  if (!data) return <></>;
  return (
    <IndexLayout
      route={{ pathname: "/albums" }}
      newRoute={{ pathname: "/albums/new" }}
      meta={data.meta}
      searchAutocompleteProps={{
        options: search.data || [],
        loading: search.isLoading,
        getOptionLabel: (option) => setLocale(option.title, router),
        textFieldProps: {
          onChange: (e) =>
            search.mutate({
              where: {
                title: {
                  is: { [router.locale]: { contains: e.currentTarget.value } },
                },
              },
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
