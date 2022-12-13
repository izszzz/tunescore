import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import BandLists from "../../components/elements/list/band";
import IndexLayout from "../../components/layouts/index/default";
import { trpc } from "../../utils/trpc";
import setLocale from "../../utils/setLocale";

const Bands: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.useQuery([
    "pagination.band",
    {
      args: {
        include: { _count: { select: { artists: true, musics: true } } },
        where: {
          name: {
            is: { [router.locale]: { contains: router.query.q as string } },
          },
        },
      },
      options: { page: (router.query.page as string) || 0, perPage: 12 },
    },
  ]);
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
      <BandLists data={data.data} />
    </IndexLayout>
  );
};

export default Bands;
