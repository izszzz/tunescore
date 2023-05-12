import type { NextPage } from "next";
import { useRouter } from "next/router";

import DeleteAlert from "../../components/elements/alert/delete";
import ProviderButtons from "../../components/elements/button/providers";
import SingleForm from "../../components/elements/form/single";
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
  if (!data) return null;

  return (
    <DashboardLayout active="settings">
      <ProviderButtons stackProps={{ direction: "row" }} />

      <SingleForm
        data={data}
        formContainerProps={{
          onSuccess: ({ name }) => update.mutate({ name }),
        }}
        loading={update.isLoading}
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
