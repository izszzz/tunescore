import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import AlbumLists from "../../components/elements/list/album";
import IndexLayout from "../../components/layouts/index/default";
import { trpc } from "../../utils/trpc";
import setLocale from "../../helpers/setLocale";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { albumPaginationPath } from "../../paths/albums";

const Albums: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.useQuery(albumPaginationPath({ router, session }));
  const search = trpc.useMutation(["search.album"], {
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
        getOptionLabel: (option) => setLocale(option.title, router) || "",
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
