import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ResourceLists from "../../../components/elements/list/resource";
import AlbumLayout from "../../../components/layouts/show/album";
import type { AlbumLayoutProps } from "../../../components/layouts/show/album";
import { albumShowQuery } from "../../../paths/albums/[id]";
import { trpc } from "../../../utils/trpc";

const Album: NextPage = () => {
  const router = useRouter<"/albums/[id]">();
  const path = albumShowQuery({ router, session: useSession().data });
  const { data } = trpc.resource.findUniqueResource.useQuery(path);
  if (!data) return <></>;
  const albumData = data as AlbumLayoutProps["data"],
    { album } = albumData;

  return (
    <AlbumLayout activeTab="info" data={albumData} query={path}>
      {album?.band && (
        <ResourceLists data={[{ ...album.band.resource, band: album.band }]} />
      )}

      <ResourceLists
        data={
          album?.musics.map(({ resource, ...music }) => ({
            ...resource,
            music,
          })) ?? []
        }
      />

      <ResourceLists
        data={
          album?.artists.map(({ resource, ...artist }) => ({
            ...resource,
            artist,
          })) ?? []
        }
      />
    </AlbumLayout>
  );
};

export default Album;
