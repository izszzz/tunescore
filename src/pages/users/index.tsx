import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import UserLists from "../../components/elements/list/user";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { userCount } from "../../helpers/user";
import { trpc } from "../../utils/trpc";

const Users: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const { data } = trpc.pagination.user.useQuery(
    {
      args: {
        where: {
          name: { contains: (router.query.q as string) || "" },
        },
        include: { _count: userCount },
      },
      options: { page: (router.query.page as string) || 0 },
    },
    { onError: () => enqueueSnackbar("user.index error") }
  );
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <UserLists data={data.data} />
    </DefaultSingleColumnLayout>
  );
};

export default Users;
