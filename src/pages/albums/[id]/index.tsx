import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import ArtistLists from "../../../components/elements/list/artist";
import BandLists from "../../../components/elements/list/band";
import { trpc } from "../../../utils/trpc";
import AlbumLayout from "../../../components/layouts/show/album";
import { albumShowPath } from "../../../paths/albums/[id]";
import MusicLists from "../../../components/elements/list/music";
import type { AlbumLayoutProps } from "../../../components/layouts/show/album";
import type { NextPage } from "next";

const Album: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = albumShowPath({ router, session });
  const { data } = trpc.useQuery(undefined, path);
  if (!data) return <></>;
  const albumData = data as AlbumLayoutProps["data"];
  return (
    <AlbumLayout data={albumData} path={path} activeTab="info">
      {albumData.band && <BandLists data={[albumData.band]} />}

      <MusicLists data={albumData.musics} />

      <ArtistLists data={albumData.artists} />
    </AlbumLayout>
  );
};

export default Album;
