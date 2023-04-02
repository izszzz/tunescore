import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ArtistLists from "../../../components/elements/list/artist";
import BandLists from "../../../components/elements/list/band";
import MusicLists from "../../../components/elements/list/music";
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
        <BandLists data={[{ ...album.band.resource, band: album.band }]} />
      )}

      <MusicLists
        data={
          album?.musics.map(({ resource, ...music }) => ({
            ...resource,
            music,
          })) ?? []
        }
      />

      <ArtistLists
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
