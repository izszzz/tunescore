import type { NextPage } from "next";

import DashboardLayout from "../../components/layouts/dashboard";
import { trpc } from "../../utils/trpc";

const Dashboard: NextPage = () => {
  const { data } = trpc.currentUser.findCurrentUser.useQuery();
  return (
    <DashboardLayout>
      <>main</>
      <>point: {data?.point}</>
    </DashboardLayout>
  );
};

export default Dashboard;
