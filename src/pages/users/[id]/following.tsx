import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import UserLists from "../../../components/elements/list/user";
import IndexLayout from "../../../components/layouts/index";
import UserLayout from "../../../components/layouts/show/user";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import { userShowQuery } from "../../../paths/users/[id]";
import { followingPath } from "../../../paths/users/[id]/following";
import { trpc } from "../../../utils/trpc";

const UserFollowers: NextPage = () => {
  const router = useRouter<"/users/[id]">(),
    { id } = router.query,
    { data: session } = useSession(),
    query = userShowQuery({ router, session }),
    { data } = trpc.user.findUniqueUser.useQuery(query),
    { data: followData } = trpc.pagination.follow.useQuery(
      followingPath({ router })
    ),
    search = trpc.search.follow.useMutation();
  if (!data || !followData) return <></>;
  const userData = data as unknown as UserLayoutProps["data"];
  return (
    <UserLayout query={query} data={userData} activeTab="">
      <IndexLayout
        meta={followData.meta}
        searchAutocompleteProps={{
          options: search.data?.map((follow) => follow.follower) || [],
          loading: search.isLoading,
          getOptionLabel: (option) => option.name || "",
          textFieldProps: {
            onChange: ({ currentTarget: { value: v } }) =>
              search.mutate({
                where: { followingId: id, follower: { name: { contains: v } } },
                take: 10,
              }),
          },
        }}
      >
        <UserLists data={followData.data.map((follow) => follow.follower)} />
      </IndexLayout>
    </UserLayout>
  );
};

export default UserFollowers;
