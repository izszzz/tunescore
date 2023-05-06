import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import TransactionLists from "../../../components/elements/list/transaction";
import DashboardLayout from "../../../components/layouts/dashboard";
import IndexLayout from "../../../components/layouts/index";
import { transactionsPaginationQuery } from "../../../paths/dashboard/transactions";
import { trpc } from "../../../utils/trpc";

const Transactions: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter(),
    // TODO: add perPage
    { data } = trpc.pagination.transaction.useQuery(
      transactionsPaginationQuery({ session, router })
    );
  if (!data) return <></>;
  return (
    <DashboardLayout active="transactions">
      <IndexLayout meta={data.meta}>
        <TransactionLists data={data.data} />
      </IndexLayout>
    </DashboardLayout>
  );
};

export default Transactions;
