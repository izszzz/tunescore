import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";

import IssueLists from "../../../../components/elements/list/issue";
import IndexLayout from "../../../../components/layouts/index";
import MusicLayout from "../../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../../components/layouts/show/music";
import { getRouterId } from "../../../../helpers/router";
import { musicShowQuery } from "../../../../paths/musics/[id]";
import { trpc } from "../../../../utils/trpc";
const Issues: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar(),
    router = useRouter(),
    id = getRouterId(router),
    query = musicShowQuery({ router, session: useSession().data }),
    music = trpc.music.findUniqueMusic.useQuery(query, {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }),
    { data: issueData } = trpc.pagination.issue.useQuery(
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
          enqueueSnackbar("music.show error");
        },
      }
    ),
    search = trpc.search.issue.useMutation({
      onError: () => {
        enqueueSnackbar("music.search error");
      },
    });
  if (!music.data || !issueData) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} query={query} activeTab="issues">
      <IndexLayout
        meta={issueData.meta}
        newRoute={{
          pathname: "/musics/[id]/issues/new",
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
        <IssueLists data={issueData.data} />
      </IndexLayout>
    </MusicLayout>
  );
};

export default Issues;
