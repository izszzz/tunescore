import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import IndexLayout from "../../../../components/layouts/index";
import IssueLists from "../../../../components/elements/list/issue";
import MusicLayout, {
  MusicLayoutProps,
} from "../../../../components/layouts/show/music";
import { trpc } from "../../../../utils/trpc";
const Issues: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
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
        },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("music.show error");
      },
    }
  );
  const { data: issueData } = trpc.useQuery(
    [
      "pagination.issue",
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
    <MusicLayout data={musicData} activeTab="issues">
      <IndexLayout
        meta={issueData.meta}
        route={{
          pathname: "/musics/[id]/issues",
          query: { id: router.query.id as string },
        }}
        newRoute={{
          pathname: "/musics/[id]/issues/new",
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
        <IssueLists data={issueData.data} />
      </IndexLayout>
    </MusicLayout>
  );
};

export default Issues;
