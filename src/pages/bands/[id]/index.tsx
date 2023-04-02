import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ArtistLists from "../../../components/elements/list/artist";
import MusicLists from "../../../components/elements/list/music";
import BandLayout from "../../../components/layouts/show/band";
import type { BandLayoutProps } from "../../../components/layouts/show/band";
import { bandShowQuery } from "../../../paths/bands/[id]";
import { trpc } from "../../../utils/trpc";

const Band: NextPage = () => {
  const router = useRouter<"/bands/[id]">();
  const path = bandShowQuery({ router, session: useSession().data });
  const { data } = trpc.resource.findUniqueResource.useQuery(path);
  if (!data) return <></>;
  const bandData = data as BandLayoutProps["data"],
    { band } = bandData;
  return (
    <BandLayout activeTab="info" data={bandData} query={path}>
      <MusicLists
        data={
          band?.musics.map(({ resource, ...music }) => ({
            ...resource,
            music,
          })) ?? []
        }
      />
      <ArtistLists
        data={
          band?.artists.map(({ resource, ...artist }) => ({
            ...resource,
            artist,
          })) ?? []
        }
      />
    </BandLayout>
  );
};

export default Band;
