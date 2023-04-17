import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import IssueLists from "../../../../components/elements/list/issue";
import IndexLayout from "../../../../components/layouts/index";
import ResourceShowLayout from "../../../../components/layouts/show/resource";
import { resourceMusicShowQuery } from "../../../../helpers/resource";
import { userArgs } from "../../../../helpers/user";
import { trpc } from "../../../../utils/trpc";
const Issues: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar(),
    router = useRouter<"/musics/[id]">(),
    { id } = router.query,
    { data: issueData } = trpc.pagination.issue.useQuery(
      {
        args: {
          include: { user: userArgs },
          where: {
            title: { contains: (router.query.q as string) || "" },
            music: { id },
          },
        },
        options: { page: (router.query.page as string) || 0, perPage: 12 },
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
                  take: 10,
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
