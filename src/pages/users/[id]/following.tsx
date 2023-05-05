import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";

import { perPageState } from "../../../atoms/perPage";
import UserListItem from "../../../components/elements/list/item/user";
import UserLists from "../../../components/elements/list/user";
import IndexLayout from "../../../components/layouts/index";
import ListsLayout from "../../../components/layouts/lists";
import UserLayout from "../../../components/layouts/show/user";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import { env } from "../../../env/client.mjs";
import { userShowQuery } from "../../../paths/users/[id]";
import { followingPath } from "../../../paths/users/[id]/following";
import { trpc } from "../../../utils/trpc";

const UserFollowers: NextPage = () => {
  const [perPage] = useRecoilState(perPageState),
    router = useRouter<"/users/[id]">(),
    { id } = router.query,
    { data: session } = useSession(),
    query = userShowQuery({ router, session }),
    { data } = trpc.user.findUniqueUser.useQuery(query),
    { data: followData } = trpc.pagination.follow.useQuery(
      followingPath({ router, perPage })
    ),
    search = trpc.search.follow.useMutation();
  if (!data || !followData) return <></>;
  const userData = data as unknown as UserLayoutProps["data"];
  return (
    <UserLayout activeTab="" data={userData} query={query}>
      <IndexLayout
        meta={followData.meta}
        searchAutocompleteProps={{
          options: search.data?.map((follow) => follow.follower) ?? [],
          loading: search.isLoading,
          getOptionLabel: ({ name }) => name,
          textFieldProps: {
            onChange: ({ currentTarget: { value: v } }) =>
              search.mutate({
                where: { followingId: id, follower: { name: { contains: v } } },
                take: Number(env.NEXT_PUBLIC_DEFAULT_SEARCH_TAKE),
              }),
          },
        }}
      >
        <ListsLayout
          data={followData.data.map((follow) => follow.follower)}
          lists={{ listItem: (data) => <UserListItem data={data} /> }}
        />
      </IndexLayout>
    </UserLayout>
  );
};

export default UserFollowers;
