import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useRecoilState } from "recoil";

import { perPageState } from "../../../../atoms/perPage";
import IssueLists from "../../../../components/elements/list/issue";
import IndexLayout from "../../../../components/layouts/index";
import ResourceShowLayout from "../../../../components/layouts/show/resource";
import { env } from "../../../../env/client.mjs";
import { resourceMusicShowQuery } from "../../../../helpers/resource";
import { userArgs } from "../../../../helpers/user";
import { trpc } from "../../../../utils/trpc";
const Issues: NextPage = () => {
  const [perPage] = useRecoilState(perPageState),
    { enqueueSnackbar } = useSnackbar(),
    router = useRouter<"/musics/[id]">(),
    { id } = router.query,
    { data: issueData } = trpc.pagination.issue.useQuery(
      {
        args: {
          include: { user: userArgs },
          where: {
            title: { contains: (router.query.q as string) || "" },
            music: { resource: { id } },
          },
        },
        options: { page: router.query.page as string, perPage },
      },
      { onError: () => enqueueSnackbar("music.show error") }
    ),
    search = trpc.search.issue.useMutation({
      onError: () => enqueueSnackbar("music.search error"),
    });
  if (!issueData) return <></>;
  return (
    <ResourceShowLayout activeTab="issues" getQuery={resourceMusicShowQuery}>
      {() => (
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
              onChange: ({ currentTarget: { value } }) =>
                search.mutate({
                  where: { title: { contains: value }, music: { id } },
                  take: Number(env.NEXT_PUBLIC_DEFAULT_SEARCH_TAKE),
                }),
            },
          }}
        >
          <IssueLists data={issueData.data} />
        </IndexLayout>
      )}
    </ResourceShowLayout>
  );
};

export default Issues;
