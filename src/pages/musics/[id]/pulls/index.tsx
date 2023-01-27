import type { Pull } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import PullLists from "../../../../components/elements/list/pull";
import IndexLayout from "../../../../components/layouts/index";
import MusicLayout from "../../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../../components/layouts/show/music";
import { getRouterId } from "../../../../helpers/router";
import { musicShowQuery } from "../../../../paths/musics/[id]";
import { trpc } from "../../../../utils/trpc";

const Issues: NextPage = () => {
  const router = useRouter(),
    id = getRouterId(router),
    { enqueueSnackbar } = useSnackbar(),
    query = musicShowQuery({ router, session: useSession().data }),
    music = trpc.music.findUniqueMusic.useQuery(query, {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }),
    { data: pullsData } = trpc.pagination.pull.useQuery(
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
      {
        onError: () => {
          enqueueSnackbar("pull.index error");
        },
      }
    ),
    search = trpc.search.pull.useMutation({
      onError: () => {
        enqueueSnackbar("music.search error");
      },
    });
  if (!music.data || !pullsData) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} query={query} activeTab="pullrequests">
      <IndexLayout<Pull>
        meta={pullsData.meta}
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
