import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import UserLayout, {
  UserLayoutProps,
} from "../../../components/layouts/show/user";
import type { NextPage } from "next";
import { createPath } from "../../../helpers/path";
import SingleRowForm from "../../../components/elements/form/single_row";
import DeleteAlert from "../../../components/elements/alert/delete";
import { getRouterId } from "../../../helpers/router";

const SettingsUser: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const id = getRouterId(router);
  const userId = session?.user?.id;
  const update = trpc.useMutation("user.updateOneUser");
  const path = createPath([
    "user.findUniqueUser",
    {
      where: { id },
      include: {
        _count: { select: { following: true, followers: true } },
        followers: {
          where: { followerId: id, followingId: userId },
        },
        bookmarks: true,
      },
    },
  ]);
  const query = path[1];
  const { data } = trpc.useQuery(path);
  const destroy = trpc.useMutation("user.deleteOneUser", {
    onSuccess: () => router.push("/"),
    onError: (error) => console.log(error),
  });
  const userData = data as UserLayoutProps["data"];
  return (
    <UserLayout data={userData} activeTab="settings">
      <SingleRowForm
        data={userData}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ name }) => update.mutate({ ...query, data: { name } }),
        }}
        textFieldElementProps={{
          name: "name",
        }}
      />
      <DeleteAlert
        loadingButtonProps={{
          onClick: () => destroy.mutate({ ...query }),
          loading: destroy.isLoading,
        }}
      />
    </UserLayout>
  );
};

export default SettingsUser;
