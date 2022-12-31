import React from "react";
import UserLayout from "../../../components/layouts/show/user";
import UserLists from "../../../components/elements/list/user";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { trpc } from "../../../utils/trpc";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { userShowPath } from "../../../paths/users/[id]";
import { createPath } from "../../../helpers/path";
import { getRouterId } from "../../../helpers/router";
import { followersPath } from "../../../paths/users/[id]/followers";

const UserFollowers: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const path = userShowPath({ router, session });
  const followPath = followersPath({ router, session });
  const { data } = trpc.useQuery(path);
  const { data: followData } = trpc.useQuery(followPath);
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
      <UserLists data={followData.data.map((follow) => follow.following)} />
    </UserLayout>
  );
};

export default UserFollowers;
