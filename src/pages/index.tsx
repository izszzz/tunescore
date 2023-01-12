import Grid from "@mui/material/Unstable_Grid2";
import { useSession } from "next-auth/react";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";
import { participatedArtistQuery } from "../helpers/participation";
import { bookmarkQuery } from "../helpers/bookmark";
import { artistListQuery } from "../helpers/artist";
import { albumListQuery } from "../helpers/album";
import { bandListQuery } from "../helpers/band";
import SquareMusicCard from "../components/elements/card/square/music";
import SquareAlbumCard from "../components/elements/card/square/album";
import SquareArtistCard from "../components/elements/card/square/artist";
import SquareBandCard from "../components/elements/card/square/band";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const session = useSession();
  const musics = trpc.pagination.music.useQuery({
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
  });
  const albums = trpc.pagination.album.useQuery({
    args: {
      ...albumListQuery(session),
    },
    options: { page: 0, perPage: 12 },
  });
  const artists = trpc.pagination.artist.useQuery({
    args: {
      ...artistListQuery(session),
    },
    options: { page: 0, perPage: 12 },
  });
  const bands = trpc.pagination.band.useQuery({
    args: {
      ...bandListQuery(session),
    },
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
            <SquareMusicCard data={music} />
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
            <SquareAlbumCard data={album} />
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
            <SquareArtistCard data={artist} />
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
            <SquareBandCard data={band} />
          </Grid>
        ))}
      </Grid>
    </DefaultSingleColumnLayout>
  );
};

export default Home;
