import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useSession } from "next-auth/react";
import IndexLayout from "../../../../components/layouts/index";
import IssueLists from "../../../../components/elements/list/issue";
import MusicLayout from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
import type { MusicLayoutProps } from "../../../../components/layouts/show/music";
import type { NextPage } from "next";
import { musicShowPath } from "../../../../paths/musics/[id]";
import { getRouterId } from "../../../../helpers/router";
const Issues: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const id = getRouterId(router);
  const session = useSession();
  const path = musicShowPath({ router, session });
  const music = trpc.useQuery(path, {
    onError: () => {
      enqueueSnackbar("music.show error");
    },
  });
  const { data: issueData } = trpc.useQuery(
    [
      "pagination.issue",
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
        enqueueSnackbar("music.show error");
      },
    }
  );
  const search = trpc.useMutation(["search.issue"], {
    onError: () => {
      enqueueSnackbar("music.search error");
    },
  });
  if (!music.data || !issueData) return <></>;
  const musicData = music.data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} path={path} activeTab="issues">
      <IndexLayout
        meta={issueData.meta}
        route={{
          pathname: "/musics/[id]/issues",
          query: { id },
        }}
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
