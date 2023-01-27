import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import DeleteAlert from "../../components/elements/alert/delete";
import ProviderButtons from "../../components/elements/button/providers";
import SingleRowForm from "../../components/elements/form/single_row";
import type { UserLayoutProps } from "../../components/layouts/show/user";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { userShowQuery } from "../../paths/users/[id]";
import { trpc } from "../../utils/trpc";

const SettingsUser: NextPage = () => {
  const router = useRouter(),
    update = trpc.user.updateOneUser.useMutation(),
    query = userShowQuery(useSession().data),
    { data } = trpc.user.findUniqueUser.useQuery(query),
    destroy = trpc.user.deleteOneUser.useMutation({
      onSuccess: () => router.push("/"),
      onError: (error) => console.log(error),
    });
  if (!data) return <></>;
  const userData = data as UserLayoutProps["data"];

  return (
    <DefaultSingleColumnLayout contained>
      <ProviderButtons stackProps={{ direction: "row" }} />

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
    </DefaultSingleColumnLayout>
  );
};

export default SettingsUser;
