import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import DefaultMusicCard from "../components/elements/card/music/default";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";
import type { NextPage } from "next";
import { Typography } from "@mui/material";

const Home: NextPage = () => {
  const musics = trpc.useQuery([
    "pagination.music",
    {
      args: {
        include: {
          composers: true,
          lyrists: true,
          band: true,
          user: true,
          artists: true,
        },
      },
      options: { page: 0, perPage: 12 },
    },
  ]);
  return (
    <DefaultSingleColumnLayout>
      <Typography variant="h3">
        <Link href="/musics">
          <a>music</a>
        </Link>
      </Typography>
      <Grid container spacing={1}>
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
            <DefaultMusicCard data={music} />
          </Grid>
        ))}
      </Grid>
      <Typography variant="h3">
        <Link href="/artists">
          <a>artist</a>
        </Link>
      </Typography>
      <Typography variant="h3">
        <Link href="/bands">
          <a>band</a>
        </Link>
      </Typography>
      <Typography variant="h3">
        <Link href="/users">
          <a>user</a>
        </Link>
      </Typography>
    </DefaultSingleColumnLayout>
  );
};

export default Home;
