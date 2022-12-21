import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import IndexLayout from "../../components/layouts/index/default";
import ArtistLists from "../../components/elements/list/artist";
import { trpc } from "../../utils/trpc";
import setLocale from "../../helpers/setLocale";
const Artists: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.useMutation(["search.artist"], {
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  const { data } = trpc.useQuery([
    "pagination.artist",
    {
      args: {
        include: { bands: true },
        where: {
          name: {
            is: { [router.locale]: { contains: router.query.q as string } },
          },
        },
      },
      options: { page: (router.query.page as string) || 0, perPage: 12 },
    },
  ]);
  if (!data) return <></>;
  return (
    <IndexLayout
      route={{ pathname: "/artists" }}
      newRoute={{ pathname: "/artists/new" }}
      meta={data.meta}
      searchAutocompleteProps={{
        options: search.data || [],
        loading: search.isLoading,
        getOptionLabel: (option) => setLocale(option.name, router) || "",
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
