import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import BetaAlert from "../components/elements/alert/beta";
import DiscordBannerCard from "../components/elements/card/banner/discord";
import DocumentBannerCard from "../components/elements/card/banner/document";
import PatreonBannerCard from "../components/elements/card/banner/patreon";
import CardsLayout from "../components/layouts/cards";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { resourcePaginationQuery } from "../paths/search";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter(),
    { data, isLoading } = trpc.pagination.resource.useQuery({
      ...resourcePaginationQuery({ router, session }),
      options: { perPage: 60 },
    });
  return (
    <DefaultSingleColumnLayout>
      <Box px={5}>
        <BetaAlert />
        <Grid container mb={2} spacing={4}>
          <Grid item xs={4}>
            <DocumentBannerCard />
          </Grid>
          <Grid item xs={4}>
            <PatreonBannerCard />
          </Grid>
          <Grid item xs={4}>
            <DiscordBannerCard />
          </Grid>
        </Grid>
        <CardsLayout data={data?.data} loading={isLoading} perPage={60} />
      </Box>
    </DefaultSingleColumnLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => ({
  props: await serverSideTranslations(ctx.locale ?? "", [
    "src/components/card/banner/discord",
    "src/components/card/banner/patreon",
    "src/components/card/banner/document",
  ]),
});

export default Home;
