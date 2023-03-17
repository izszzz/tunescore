import Grid from "@mui/material/Unstable_Grid2";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ResourceDefaultSquareCard from "../components/elements/card/square/default/resource";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { resourcePaginationQuery } from "../paths/search";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter(),
    { data } = trpc.pagination.resource.useQuery({
      ...resourcePaginationQuery({ router, session }),
      options: { perPage: 100 },
    });
  return (
    <DefaultSingleColumnLayout>
      <Grid container spacing={1} my={3}>
        {data?.data.map((data) => (
          <Grid
            key={data.id}
            xs={6}
            sm={4}
            md={2}
            px={2}
            display="flex"
            justifyContent="center"
          >
            <ResourceDefaultSquareCard data={data} />
          </Grid>
        ))}
      </Grid>
    </DefaultSingleColumnLayout>
  );
};

export default Home;
