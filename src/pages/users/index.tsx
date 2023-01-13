import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";
import UserLists from "../../components/elements/list/user";
import { userCountQuery } from "../../helpers/user";
import type { NextPage } from "next";

const Users: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.pagination.user.useQuery(
    {
      args: {
        where: {
          name: { contains: (router.query.q as string) || "" },
        },
        include: {
          _count: userCountQuery,
        },
      },
      options: { page: (router.query.page as string) || 0, perPage: 12 },
    },
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
