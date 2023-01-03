import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import UserLists from "../../../components/elements/list/user";
import UserLayout from "../../../components/layouts/show/user";
import { userShowPath } from "../../../paths/users/[id]";
import { followersPath } from "../../../paths/users/[id]/followers";
import IndexLayout from "../../../components/layouts/index";
import { getRouterId } from "../../../helpers/router";
import type { NextPage } from "next";
import type { Prisma } from "@prisma/client";

const UserFollowers: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const id = getRouterId(router);
  const path = userShowPath({ router, session });
  const followPath = followersPath({ router, session });
  const { data } = trpc.useQuery(path);
  const { data: followData } = trpc.useQuery(followPath);
  const search = trpc.useMutation("search.follow");
  if (!data || !followData) return <></>;
  const userData = data as Prisma.UserGetPayload<{
    include: {
      _count: { select: { following: true; followers: true } };
      followers: {
        include: {
          following: {
            include: {
              _count: { select: { following: true; followers: true } };
            };
          };
        };
      };
      bookmarks: true;
    };
  }>;
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
