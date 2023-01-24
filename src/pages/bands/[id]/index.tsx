import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import LinkButtons from "../../../components/elements/button/link";
import ArtistLists from "../../../components/elements/list/artist";
import MusicLists from "../../../components/elements/list/music";
import BandLayout from "../../../components/layouts/show/band";
import type { BandLayoutProps } from "../../../components/layouts/show/band";
import { bandShowQuery } from "../../../paths/bands/[id]";
import { trpc } from "../../../utils/trpc";

const Band: NextPage = () => {
  const router = useRouter();
  const path = bandShowQuery({ router, session: useSession().data });
  const { data } = trpc.band.findUniqueBand.useQuery(path);
  if (!data) return <></>;
  const bandData = data as BandLayoutProps["data"];
  return (
    <BandLayout data={bandData} query={path} activeTab="info">
      {data.link && <LinkButtons data={data.link} />}

      <MusicLists data={bandData.musics} />
      <ArtistLists data={bandData.artists} />
    </BandLayout>
  );
};

export default Band;
