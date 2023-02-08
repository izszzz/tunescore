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
  const { data } = trpc.purchase.findManyPurchase.useQuery({
    include: { music: musicListArgs(session) },
  });
  if (!data) return <></>;
  const purchaseData = data as Prisma.PurchaseGetPayload<{
    include: { music: MusicListArgsType };
  }>[];
  const musics = purchaseData?.map((data) => data.music);
  return (
    <DashboardLayout active="library">
      <MusicLists data={musics} />
    </DashboardLayout>
  );
};

export default Library;
