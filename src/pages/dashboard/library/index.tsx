import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import MusicLists from "../../../components/elements/list/music";
import DashboardLayout from "../../../components/layouts/dashboard";
import type { MusicListArgsType } from "../../../helpers/music";
import { musicListArgs } from "../../../helpers/music";
import { trpc } from "../../../utils/trpc";

const Library: NextPage = () => {
  const { data: session } = useSession();
  const { data } = trpc.transaction.findManyTransaction.useQuery({
    include: { music: musicListArgs(session) },
  });
  if (!data) return <></>;
  const transactionData = data as unknown as Prisma.TransactionGetPayload<{
    include: { music: MusicListArgsType };
  }>[];
  return (
    <DashboardLayout active="library">
      <MusicLists data={transactionData?.map((data) => data.music)} />
    </DashboardLayout>
  );
};

export default Library;
