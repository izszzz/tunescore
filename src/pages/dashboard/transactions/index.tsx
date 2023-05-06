import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";

import { perPageState } from "../../../atoms/perPage";
import TransactionListItem from "../../../components/elements/list/item/transaction";
import DashboardLayout from "../../../components/layouts/dashboard";
import IndexLayout from "../../../components/layouts/index";
import ListsLayout from "../../../components/layouts/lists";
import { transactionsPaginationQuery } from "../../../paths/dashboard/transactions";
import { trpc } from "../../../utils/trpc";

const Transactions: NextPage = () => {
  const [perPage] = useRecoilState(perPageState),
    { data: session } = useSession(),
    router = useRouter(),
    { data } = trpc.pagination.transaction.useQuery(
      transactionsPaginationQuery({ session, router, perPage })
    );
  return (
    <DashboardLayout active="transactions">
      <IndexLayout meta={data?.meta}>
        <ListsLayout
          data={data?.data}
          lists={{ listItem: (data) => <TransactionListItem data={data} /> }}
        />
      </IndexLayout>
    </DashboardLayout>
  );
};

export default Transactions;
