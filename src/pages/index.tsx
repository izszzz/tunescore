import Grid from "@mui/material/Unstable_Grid2";
import type { NextPage } from "next";
import Link from 'next/link'
import DefaultMusicCard from "../components/elements/card/music/default";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const musics = trpc.useQuery(["music.index", {
    args: { include: { composers: true, lyrists: true, band: true, user: true } },
    options: { page: 0, perPage: 12 }
  }])
  return (
    <DefaultSingleColumnLayout>
      <>home</>
      <br /><Link href="/musics">
        <a>music</a>
      </Link>
      <br /><Link href="/users">
        <a>user</a>
      </Link>
      <br /><Link href="/artists">
        <a>artist</a>
      </Link>
      <br /><Link href="/bands">
        <a>band</a>
      </Link>
      <Grid container spacing={1} >
        {musics.data?.data.map((music) =>
          <Grid key={music.id} xs={6} sm={4} md={2} px={2} display="flex" justifyContent="center">
            <DefaultMusicCard data={music} />
          </Grid>
        )}
      </Grid>
    </DefaultSingleColumnLayout>
  );
};

export default Home;