import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ResourceListItem from "../components/elements/list/item/resource";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { resourcePaginationQuery } from "../paths/search";
import { trpc } from "../utils/trpc";

const Search: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter(),
    { data } = trpc.pagination.resource.useQuery(
      resourcePaginationQuery({ router, session })
    );

  return (
    <DefaultSingleColumnLayout contained>
      {data?.data.map((data, i) => (
        <ResourceListItem key={i} data={data} />
      ))}
    </DefaultSingleColumnLayout>
  );
};

export default Search;
