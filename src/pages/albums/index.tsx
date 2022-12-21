import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import AlbumLists from "../../components/elements/list/album";
import IndexLayout from "../../components/layouts/index/default";
import { trpc } from "../../utils/trpc";
import setLocale from "../../helpers/setLocale";

const Albums: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.useQuery([
    "pagination.album",
    {
      args: {
        include: {
          _count: { select: { artists: true, musics: true } },
          band: true,
        },
        where: {
          title: {
            is: { [router.locale]: { contains: router.query.q as string } },
          },
        },
      },
      options: { page: (router.query.page as string) || 0, perPage: 12 },
    },
  ]);
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
