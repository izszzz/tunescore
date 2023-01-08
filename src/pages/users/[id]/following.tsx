import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import UserLists from "../../../components/elements/list/user";
import UserLayout from "../../../components/layouts/show/user";
import { followingPath } from "../../../paths/users/[id]/following";
import { userShowPath } from "../../../paths/users/[id]";
import IndexLayout from "../../../components/layouts/index";
import { getRouterId } from "../../../helpers/router";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";

const UserFollowers: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const id = getRouterId(router);
  const path = userShowPath({ router, session });
  const followPath = followingPath({ router });
  const { data } = trpc.useQuery(path);
  const { data: followData } = trpc.useQuery(followPath);
  const search = trpc.useMutation("search.follow");
  const userData = data as Prisma.UserGetPayload<{
    include: {
      _count: { select: { following: true; followers: true } };
      followers: true;
      following: {
        include: {
          follower: {
            include: {
              _count: { select: { following: true; followers: true } };
            };
          };
        };
      };
      bookmarks: true;
    };
  }>;
  if (!data || !followData) return <></>;
  return (
    <UserLayout data={userData} activeTab="">
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
