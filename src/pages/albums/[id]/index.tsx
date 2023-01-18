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
  const router = useRouter();
  const path = albumShowQuery({ router, session: useSession().data });
  const { data } = trpc.album.findUniqueAlbum.useQuery(path);
  if (!data) return <></>;
  const albumData = data as AlbumLayoutProps["data"];
  return (
    <AlbumLayout data={albumData} query={path} activeTab="info">
      {albumData.band && <BandLists data={[albumData.band]} />}

      <MusicLists data={albumData.musics} />

      <ArtistLists data={albumData.artists} />
    </AlbumLayout>
  );
};

export default Album;
