import Grid from "@mui/material/Unstable_Grid2";
import type { GetServerSideProps, NextPage } from "next";
import { getProviders } from "next-auth/react";
import Link from 'next/link'
import DefaultMusicCard from "../components/elements/card/music/default";
import DefaultSingleColumnLayout, { DefaultSingleColumnLayoutProps } from "../components/layouts/single_column/default";
import { trpc } from "../utils/trpc";

type HomeProps = Pick<DefaultSingleColumnLayoutProps, "providers">
const Home: NextPage<HomeProps> = ({ providers }) => {
  const musics = trpc.useQuery(["music.index", {
    args: { include: { composers: true, lyrists: true, band: true, user: true } },
    options: { page: 0, perPage: 12 }
  }])
  return (
    <DefaultSingleColumnLayout providers={providers}>
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

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers },
  };
};

export default Home;