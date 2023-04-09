import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

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
      <CardsLayout data={data?.data} loading={isLoading} perPage={60} />
    </DefaultSingleColumnLayout>
  );
};

export default Home;
