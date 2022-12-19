import type { NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout, {
  MusicLayoutProps,
} from "../../../../components/layouts/show/music";
import PullLists from "../../../../components/elements/list/pull";
import IndexLayout from "../../../../components/layouts/index";
import { trpc } from "../../../../utils/trpc";
import { useSnackbar } from "notistack";
import { Pull } from "@prisma/client";
import { useSession } from "next-auth/react";
const Issues: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const music = trpc.useQuery(
    [
      "music.findUniqueMusic",
      {
        where: { id: router.query.id as string },
        include: {
          user: true,
          band: true,
          artists: true,
          composers: true,
          lyrists: true,
          bookmarks: { where: { id: session.data?.user?.id } },
        },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  const { data: pullsData } = trpc.useQuery(
    [
      "pagination.pull",
      {
        args: {
          include: { user: true },
          where: {
            title: { contains: (router.query.q as string) || "" },
            music: { id: router.query.id as string },
          },
        },
        options: { page: (router.query.page as string) || 0, perPage: 12 },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("pull.index error");
      },
    }
  );
  const search = trpc.useMutation(["search.pull"], {
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  if (!music.data || !pullsData) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} activeTab="pullrequests">
      <IndexLayout<Pull>
        meta={pullsData.meta}
        route={{
          pathname: "/musics/[id]/pulls",
          query: { id: router.query.id as string },
        }}
        newRoute={{
          pathname: "/musics/[id]/pulls/new",
          query: { id: router.query.id as string },
        }}
        searchAutocompleteProps={{
          options: search.data || [],
          loading: search.isLoading,
          getOptionLabel: (option) => option.title,
          textFieldProps: {
            onChange: (e) =>
              search.mutate({
                where: {
                  title: { contains: e.currentTarget.value },
                  music: { id: router.query.id as string },
                },
                take: 10,
              }),
          },
        }}
      >
        <PullLists data={pullsData.data} />
      </IndexLayout>
    </MusicLayout>
  );
};

export default Issues;
