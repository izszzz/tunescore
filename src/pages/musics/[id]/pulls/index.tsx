import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import MusicLayout from "../../../../components/layouts/show/music";
import PullLists from "../../../../components/elements/list/pull";
import IndexLayout from "../../../../components/layouts/index";
import { trpc } from "../../../../utils/trpc";
import type { MusicLayoutProps } from "../../../../components/layouts/show/music";
import type { Pull } from "@prisma/client";
import type { NextPage } from "next";
import { musicShowPath } from "../../../../paths/musics/[id]";
import { getRouterId } from "../../../../helpers/router";

const Issues: NextPage = () => {
  const router = useRouter();
  const id = getRouterId(router);
  const { enqueueSnackbar } = useSnackbar();
  const session = useSession();
  const path = musicShowPath({ router, session });
  const music = trpc.useQuery(path, {
    onError: () => {
      enqueueSnackbar("music.show error");
    },
  });
  const { data: pullsData } = trpc.useQuery(
    [
      "pagination.pull",
      {
        args: {
          include: { user: true },
          where: {
            title: { contains: (router.query.q as string) || "" },
            music: { id },
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
    <MusicLayout data={musicData} path={path} activeTab="pullrequests">
      <IndexLayout<Pull>
        meta={pullsData.meta}
        route={{
          pathname: "/musics/[id]/pulls",
          query: { id },
        }}
        newRoute={{
          pathname: "/musics/[id]/pulls/new",
          query: { id },
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
                  music: { id },
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
