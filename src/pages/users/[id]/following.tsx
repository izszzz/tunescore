import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import UserLists from "../../../components/elements/list/user";
import UserLayout from "../../../components/layouts/show/user";
import { followingPath } from "../../../paths/users/[id]/following";
import { userShowQuery } from "../../../paths/users/[id]";
import IndexLayout from "../../../components/layouts/index";
import { getRouterId } from "../../../helpers/router";
import type { NextPage } from "next";

const UserFollowers: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const id = getRouterId(router);
  const { data } = trpc.user.findUniqueUser.useQuery(
    userShowQuery({ router, session })
  );
  const { data: followData } = trpc.pagination.follow.useQuery(
    followingPath({ router })
  );
  const search = trpc.search.follow.useMutation();
  if (!data || !followData) return <></>;
  return (
    <UserLayout data={data} activeTab="">
      <IndexLayout
        route={{ pathname: "/users/[id]/following", query: { id } }}
        meta={followData.meta}
        searchAutocompleteProps={{
          options: search.data?.map((follow) => follow.follower) || [],
          loading: search.isLoading,
          getOptionLabel: (option) => option.name || "",
          textFieldProps: {
            onChange: (e) =>
              search.mutate({
                where: {
                  followingId: id,
                  follower: { name: { contains: e.currentTarget.value } },
                },
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
