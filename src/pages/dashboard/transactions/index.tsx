import type { NextPage } from "next";

import TransactionLists from "../../../components/elements/list/transaction";
import DashboardLayout from "../../../components/layouts/dashboard";
import { trpc } from "../../../utils/trpc";

const Transactions: NextPage = () => {
  const { data } = trpc.currentUser.findManyTransaction.useQuery();
  if (!data) return <>loading</>;
  return (
    <DashboardLayout active="transactions">
      <TransactionLists data={data} />
    </DashboardLayout>
  );
};

export default Transactions;
