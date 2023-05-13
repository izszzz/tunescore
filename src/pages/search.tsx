import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";

import { perPageState } from "../atoms/perPage";
import ResourceListItem from "../components/elements/list/item/resource";
import IndexLayout from "../components/layouts/index";
import ListsLayout from "../components/layouts/lists";
import DefaultSingleColumnLayout from "../components/layouts/single_column/default";
import { resourcePaginationQuery } from "../paths/search";
import { trpc } from "../utils/trpc";

const Search: NextPage = () => {
  const [perPage] = useRecoilState(perPageState),
    { data: session } = useSession(),
    router = useRouter(),
    { data } = trpc.pagination.resource.useQuery(
      resourcePaginationQuery({ router, session, perPage })
    );

  return (
    <DefaultSingleColumnLayout>
      <IndexLayout meta={data?.meta}>
        <ListsLayout
          data={data?.data}
          lists={{ listItem: (data) => <ResourceListItem data={data} /> }}
        />
      </IndexLayout>
    </DefaultSingleColumnLayout>
  );
};

export default Search;
