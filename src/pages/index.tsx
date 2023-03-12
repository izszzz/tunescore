import Grid from "@mui/material/Unstable_Grid2";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import AlbumDefaultSquareCard from "../components/elements/card/square/default/album";
import ArtistDefaultSquareCard from "../components/elements/card/square/default/artist";
import BandDefaultSquareCard from "../components/elements/card/square/default/band";
import MusicDefaultSquareCard from "../components/elements/card/square/default/music";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { albumListArgs } from "../helpers/album";
import { artistListArgs } from "../helpers/artist";
import { bandListArgs } from "../helpers/band";
import { musicListArgs } from "../helpers/music";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const musics = trpc.pagination.music.useQuery({
    args: musicListArgs(session),
    options: { page: 0, perPage: 30 },
  });
  const albums = trpc.pagination.album.useQuery({
    args: albumListArgs(session),
    options: { page: 0, perPage: 12 },
  });
  const artists = trpc.pagination.artist.useQuery({
    args: artistListArgs(session),
    options: { page: 0, perPage: 12 },
  });
  const bands = trpc.pagination.band.useQuery({
    args: bandListArgs(session),
    options: { page: 0, perPage: 12 },
  });
  return (
    <DefaultSingleColumnLayout>
      <Grid container spacing={1} my={3}>
        {musics.data?.data.map((music) => (
          <Grid
            key={music.id}
            xs={6}
            sm={4}
            md={2}
            px={2}
            display="flex"
            justifyContent="center"
          >
            <MusicDefaultSquareCard data={music} />
          </Grid>
        ))}
        {albums.data?.data.map((album) => (
          <Grid
            key={album.id}
            xs={6}
            sm={4}
            md={2}
            px={2}
            display="flex"
            justifyContent="center"
          >
            <AlbumDefaultSquareCard data={album} />
          </Grid>
        ))}
        {artists.data?.data.map((artist) => (
          <Grid
            key={artist.id}
            xs={6}
            sm={4}
            md={2}
            px={2}
            display="flex"
            justifyContent="center"
          >
            <ArtistDefaultSquareCard data={artist} />
          </Grid>
        ))}
        {bands.data?.data.map((band) => (
          <Grid
            key={band.id}
            xs={6}
            sm={4}
            md={2}
            px={2}
            display="flex"
            justifyContent="center"
          >
            <BandDefaultSquareCard data={band} />
          </Grid>
        ))}
      </Grid>
    </DefaultSingleColumnLayout>
  );
};

export default Home;
