import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import ResourceListItem from "../components/elements/list/item/resource";
import ListsLayout from "../components/layouts/lists";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { resourcePaginationQuery } from "../paths/search";
import { trpc } from "../utils/trpc";

const Search: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter(),
    { data } = trpc.pagination.resource.useQuery({
      ...resourcePaginationQuery({ router, session }),
      options: { perPage: 60 },
    });

  return (
    <DefaultSingleColumnLayout contained>
      <ListsLayout
        data={data?.data}
        lists={{
          listItem: (data) => <ResourceListItem data={data} />,
        }}
        perPage={60}
      ></ListsLayout>
    </DefaultSingleColumnLayout>
  );
};

export default Search;
