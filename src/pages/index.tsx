import Grid from "@mui/material/Unstable_Grid2";
import { Prisma, PrismaClient } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import { getProviders } from "next-auth/react";
import Link from 'next/link'
import DefaultMusicCard from "../components/elements/card/music/default";
import DefaultSingleColumnLayout, { DefaultSingleColumnLayoutProps } from "../components/layouts/single_column/default";

interface HomeProps extends Pick<DefaultSingleColumnLayoutProps, "providers"> {
  data: Prisma.MusicGetPayload<{ include: { composers: true, lyrists: true, band: true, user: true } }>[]
}
const Home: NextPage<HomeProps> = ({ data, providers }) => {
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
        {data.map((music) =>
          <Grid key={music.id} xs={6} sm={4} md={2} px={2} display="flex" justifyContent="center">
            <DefaultMusicCard data={music} />
          </Grid>
        )}
      </Grid>
    </DefaultSingleColumnLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const prisma = new PrismaClient()
  const providers = await getProviders()
  const data = await prisma.music.findMany({ include: { composers: true, lyrists: true, band: true, user: true }, take: 12 })
  return {
    props: { data, providers },
  };
};

export default Home;