import type { Pull } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useRecoilState } from "recoil";

import { perPageState } from "../../../../atoms/perPage";
import PullLists from "../../../../components/elements/list/pull";
import IndexLayout from "../../../../components/layouts/index";
import ResourceShowLayout from "../../../../components/layouts/show/resource";
import { take } from "../../../../consts/prisma";
import { resourceMusicShowQuery } from "../../../../helpers/resource";
import { userArgs } from "../../../../helpers/user";
import { trpc } from "../../../../utils/trpc";

const Pulls: NextPage = () => {
  const [perPage] = useRecoilState(perPageState),
    router = useRouter<"/musics/[id]">(),
    { id } = router.query,
    { enqueueSnackbar } = useSnackbar(),
    { data: pullsData } = trpc.pagination.pull.useQuery(
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
      { onError: () => enqueueSnackbar("pull.index error") }
    ),
    search = trpc.search.pull.useMutation({
      onError: () => enqueueSnackbar("music.search error"),
    });
  if (!pullsData) return <></>;
  return (
    <ResourceShowLayout
      activeTab="pullrequests"
      getQuery={resourceMusicShowQuery}
    >
      {() => (
        <IndexLayout<Pull>
          meta={pullsData.meta}
          newRoute={{ pathname: "/musics/[id]/pulls/new", query: { id } }}
          searchAutocompleteProps={{
            options: search.data || [],
            loading: search.isLoading,
            getOptionLabel: ({ title }) => title,
            textFieldProps: {
              onChange: ({ currentTarget: { value } }) =>
                search.mutate({
                  where: { title: { contains: value }, music: { id } },
                  take,
                }),
            },
          }}
        >
          <PullLists data={pullsData.data} />
        </IndexLayout>
      )}
    </ResourceShowLayout>
  );
};

export default Pulls;
