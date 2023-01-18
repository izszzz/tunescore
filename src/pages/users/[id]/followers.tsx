import React from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import UserLists from "../../../components/elements/list/user";
import IndexLayout from "../../../components/layouts/index";
import UserLayout from "../../../components/layouts/show/user";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import { getRouterId } from "../../../helpers/router";
import { userShowQuery } from "../../../paths/users/[id]";
import { followersQuery } from "../../../paths/users/[id]/followers";
import { trpc } from "../../../utils/trpc";


const UserFollowers: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const id = getRouterId(router);
  const { data } = trpc.user.findUniqueUser.useQuery(
    userShowQuery({ router, session })
  );
  const { data: followData } = trpc.pagination.follow.useQuery(
    followersQuery({ router })
  );
  const search = trpc.search.follow.useMutation();
  if (!data || !followData) return <></>;
  const userData = data as UserLayoutProps["data"];
  return (
    <UserLayout data={userData} activeTab="">
      <IndexLayout
        route={{ pathname: "/users/[id]/followers", query: { id } }}
        meta={followData.meta}
        searchAutocompleteProps={{
          options: search.data?.map((follow) => follow.following) || [],
          loading: search.isLoading,
          getOptionLabel: (option) => option.name || "",
          textFieldProps: {
            onChange: (e) =>
              search.mutate({
                where: {
                  followerId: id,
                  following: { name: { contains: e.currentTarget.value } },
                },
                take: 10,
              }),
          },
        }}
      >
        <UserLists data={followData.data.map((follow) => follow.following)} />
      </IndexLayout>
    </UserLayout>
  );
};

export default UserFollowers;
