import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ResourceLists from "../../../components/elements/list/resource";
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
      <ResourceLists
        data={
          band?.musics.map(({ resource, ...music }) => ({
            ...resource,
            music,
          })) ?? []
        }
      />
      <ResourceLists
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
