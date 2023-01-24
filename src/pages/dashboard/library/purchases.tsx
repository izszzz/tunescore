import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import MusicLists from "../../../components/elements/list/music";
import DefaultSingleColumnLayout from "../../../components/layouts/single_column/default";
import { musicListArgs } from "../../../helpers/music";
import { trpc } from "../../../utils/trpc";

const Purchases: NextPage = () => {
  const { data: session } = useSession();
  const { data } = trpc.purchase.findManyPurchase.useQuery({
    include: { music: musicListArgs(session) },
  });
  const musics = data?.map((data) => data.music);
  if (!data) return <></>;
  return (
    <DefaultSingleColumnLayout contained>
      <MusicLists data={musics} />
    </DefaultSingleColumnLayout>
  );
};
export default Purchases;
