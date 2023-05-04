import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";

import UserListItem from "../../components/elements/list/item/user";
import IndexLayout from "../../components/layouts/index";
import ListsLayout from "../../components/layouts/lists";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { userArgs } from "../../helpers/user";
import { trpc } from "../../utils/trpc";

const Users: NextPage = () => {
  const router = useRouter(),
    { enqueueSnackbar } = useSnackbar(),
    { data } = trpc.pagination.user.useQuery(
      {
        args: {
          where: {
            name: { contains: (router.query.q as string) || "" },
          },
          ...userArgs,
        },
        options: { page: (router.query.page as string) || 0 },
      },
      { onError: () => enqueueSnackbar("user.index error") }
    );
  return (
    <DefaultSingleColumnLayout contained>
      <IndexLayout meta={data?.meta}>
        <ListsLayout
          data={data?.data}
          lists={{ listItem: (data) => <UserListItem data={data} /> }}
          perPage={60}
        />
      </IndexLayout>
    </DefaultSingleColumnLayout>
  );
};

export default Users;
