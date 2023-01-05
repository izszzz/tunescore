import Grid from "@mui/material/Unstable_Grid2";
import { useSession } from "next-auth/react";
import MusicCard from "../components/elements/card/music";
import ArtistCard from "../components/elements/card/artist";
import AlbumCard from "../components/elements/card/album";
import BandCard from "../components/elements/card/band";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";
import { participatedArtistQuery } from "../helpers/participation";
import { bookmarkQuery } from "../helpers/bookmark";
import { artistListQuery } from "../helpers/artist";
import { albumListQuery } from "../helpers/album";
import { bandListQuery } from "../helpers/band";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const session = useSession();
  const musics = trpc.useQuery([
    "pagination.music",
    {
      args: {
        include: {
          participations: {
            where: {
              roleMap: {
                some: {
                  role: { name: { in: ["Composer", "Lyrist", "Arranger"] } },
                },
              },
            },
            ...participatedArtistQuery(session),
            take: 1,
          },
          band: true,
          user: true,
          bookmarks: bookmarkQuery({ type: "Music", session }),
          _count: {
            select: {
              bookmarks: true,
            },
          },
        },
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
  const albums = trpc.useQuery([
    "pagination.album",
    {
      args: {
        ...albumListQuery(session),
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
  const artists = trpc.useQuery([
    "pagination.artist",
    {
      args: {
        ...artistListQuery(session),
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
  const bands = trpc.useQuery([
    "pagination.band",
    {
      args: {
        ...bandListQuery(session),
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
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
            <MusicCard data={music} />
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
            <AlbumCard data={album} />
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
            <ArtistCard data={artist} />
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
            <BandCard data={band} />
          </Grid>
        ))}
      </Grid>
    </DefaultSingleColumnLayout>
  );
};

export default Home;
