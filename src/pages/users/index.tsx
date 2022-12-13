import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";

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
      <p>users</p>
      <div>
        {data.data.map(({ id, name }) => (
          <Link key={id} href={{ pathname: "/users/[id]", query: { id } }}>
            <a>{name}</a>
          </Link>
        ))}
      </div>
    </DefaultSingleColumnLayout>
  );
};

export default Users;
