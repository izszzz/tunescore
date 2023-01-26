import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import MusicLists from "../../../components/elements/list/music";
import DefaultSingleColumnLayout from "../../../components/layouts/single_column/default";
import type { MusicListArgsType } from "../../../helpers/music";
import { musicListArgs } from "../../../helpers/music";
import { trpc } from "../../../utils/trpc";

const Purchases: NextPage = () => {
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
    <DefaultSingleColumnLayout contained>
      <MusicLists data={musics} />
    </DefaultSingleColumnLayout>
  );
};
export default Purchases;
