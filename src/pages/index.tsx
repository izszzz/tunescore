import Grid from "@mui/material/Unstable_Grid2";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ResourceSquareCard from "../components/elements/card/square/resource";
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
      <Grid container my={3} spacing={1}>
        {data?.data.map((data) => (
          <Grid
            display="flex"
            justifyContent="center"
            key={data.id}
            md={2}
            px={2}
            sm={4}
            xs={6}
          >
            <ResourceSquareCard data={data} />
          </Grid>
        ))}
      </Grid>
    </DefaultSingleColumnLayout>
  );
};

export default Home;
