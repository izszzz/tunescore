import type { NextPage } from "next";
import { useRouter } from "next/router";

import DeleteAlert from "../../components/elements/alert/delete";
import ProviderButtons from "../../components/elements/button/providers";
import SingleRowForm from "../../components/elements/form/single_row";
import DashboardLayout from "../../components/layouts/dashboard";
import { trpc } from "../../utils/trpc";

const Dashboard: NextPage = () => {
  const router = useRouter(),
    { data } = trpc.currentUser.findCurrentUser.useQuery(),
    update = trpc.currentUser.updateCurrentUser.useMutation(),
    destroy = trpc.currentUser.deleteCurrentUser.useMutation({
      onSuccess: () => router.push("/"),
      onError: (error) => console.log(error),
    });
  if (!data) return <></>;

  return (
    <DashboardLayout active="settings">
      <ProviderButtons stackProps={{ direction: "row" }} />

      <SingleRowForm
        data={data}
        loading={update.isLoading}
        formContainerProps={{
          onSuccess: ({ name }) => update.mutate({ name }),
        }}
        textFieldElementProps={{ name: "name" }}
      />

      <DeleteAlert
        loadingButtonProps={{
          onClick: () => destroy.mutate(),
          loading: destroy.isLoading,
        }}
      />
    </DashboardLayout>
  );
};

export default Dashboard;
