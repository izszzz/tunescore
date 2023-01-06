import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";
import UserLists from "../../components/elements/list/user";
import type { NextPage } from "next";

const Users: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const search = trpc.useMutation(["search.user"], {
    onError: () => {
      enqueueSnackbar("user.search error");
    },
  });
  const { data } = trpc.useQuery(
    [
      "pagination.user",
      {
        args: {
          where: {
            name: { contains: (router.query.q as string) || "" },
          },
          include: {
            _count: { select: { following: true, followers: true } },
          },
        },
        options: { page: (router.query.page as string) || 0, perPage: 12 },
      },
    ],
    {
      onError: () => {
        enqueueSnackbar("user.index error");
      },
    }
  );
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <UserLists data={data.data} />
    </DefaultSingleColumnLayout>
  );
};

export default Users;
