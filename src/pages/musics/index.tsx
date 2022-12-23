import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import DefaultIndexLayout from "../../components/layouts/index/default";
import MusicLists from "../../components/elements/list/music";
import { trpc } from "../../utils/trpc";
import setLocale from "../../helpers/setLocale";
import type { Music } from "@prisma/client";
import type { NextPage } from "next";
const Musics: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const search = trpc.useMutation(["search.music"], {
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  const { data } = trpc.useQuery(
    [
      "pagination.music",
      {
        args: {
          include: {
            composers: true,
            lyrists: true,
            band: true,
            user: true,
            artists: true,
            bookmarks: { where: { id: session.data?.user?.id } },
          },
          where: {
            title: {
              is: {
                [router.locale]: { contains: (router.query.q as string) || "" },
              },
            },
          },
        },
        options: { page: (router.query.page as string) || 0, perPage: 12 },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("music.index error");
      },
    }
  );
  if (!data) return <></>;
  return (
    <DefaultIndexLayout<Music>
      newRoute={{ pathname: "/musics/new" }}
      route={{ pathname: "/musics" }}
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
      <MusicLists data={data.data} />
    </DefaultIndexLayout>
  );
};

export default Musics;
