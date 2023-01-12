import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { match } from "ts-pattern";
import { trpc } from "../../../utils/trpc";
import UserLayout from "../../../components/layouts/show/user";
import SingleRowForm from "../../../components/elements/form/single_row";
import DeleteAlert from "../../../components/elements/alert/delete";
import { userShowQuery } from "../../../paths/users/[id]";
import GoogleButton from "../../../components/elements/button/providers/google";
import SpotifyButton from "../../../components/elements/button/providers/spotify";
import { useProviders } from "../../../hooks/useProvider";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import type { NextPage } from "next";

const SettingsUser: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const providers = useProviders();
  const update = trpc.user.updateOneUser.useMutation();
  const query = userShowQuery({ router, session });
  const { data } = trpc.user.findUniqueUser.useQuery(query);
  const destroy = trpc.user.deleteOneUser.useMutation({
    onSuccess: () => router.push("/"),
    onError: (error) => console.log(error),
  });
  if (!data) return <></>;
  const userData = data as UserLayoutProps["data"];
  const authedProviders = userData.accounts.map((account) => account.provider);

  return (
    <UserLayout data={userData} activeTab="settings">
      {providers.map((provider) =>
        match(provider)
          .with({ id: "google" }, ({ id }) => (
            <GoogleButton
              provider={provider}
              disabled={authedProviders.includes(id)}
            />
          ))
          .with({ id: "spotify" }, ({ id }) => (
            <SpotifyButton
              provider={provider}
              disabled={authedProviders.includes(id)}
            />
          ))
          .otherwise(() => <></>)
      )}
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
