import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import UserLayout from "../../../components/layouts/show/user";
import SingleRowForm from "../../../components/elements/form/single_row";
import DeleteAlert from "../../../components/elements/alert/delete";
import { userShowPath } from "../../../paths/users/[id]";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import type { NextPage } from "next";

const SettingsUser: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const update = trpc.useMutation("user.updateOneUser");
  const path = userShowPath({ router, session });
  const query = path[1];
  const { data } = trpc.useQuery(path);
  const destroy = trpc.useMutation("user.deleteOneUser", {
    onSuccess: () => router.push("/"),
    onError: (error) => console.log(error),
  });
  if (!data) return <></>;
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
