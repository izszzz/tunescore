import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { trpc } from "../../../utils/trpc";
import type { NextPage } from "next";
import BandLists from "../../../components/elements/list/band";
import ArtistLists from "../../../components/elements/list/artist";
import Typography from "@mui/material/Typography";
import AlbumLayout, {
  AlbumLayoutProps,
} from "../../../components/layouts/show/album";
import { albumShowPath } from "../../../paths/albums/[id]";
import MusicLists from "../../../components/elements/list/music";

const Album: NextPage = () => {
  const router = useRouter();
  const session = useSession();
  const path = albumShowPath({ router, session });
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
  const albumData = data as AlbumLayoutProps["data"];
  return (
    <AlbumLayout data={albumData} path={path} activeTab="info">
      <Typography variant="h6">Band</Typography>
      {albumData.band && <BandLists data={[albumData.band]} />}

      <Typography variant="h6">Musics</Typography>
      <MusicLists data={albumData.musics} />

      <Typography variant="h6">Artists</Typography>
      <ArtistLists data={albumData.artists} />
    </AlbumLayout>
  );
};

export default Album;
