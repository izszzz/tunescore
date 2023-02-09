import DashboardLayout from "../../components/layouts/dashboard";
import { trpc } from "../../utils/trpc";

const History = () => {
  const { data } = trpc.currentUser.findManyPurchase.useQuery();
  console.log(data);
  return <DashboardLayout active="history">history</DashboardLayout>;
};

export default History;
