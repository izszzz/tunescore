import React from "react";
import UserLayout from "../../../components/layouts/show/user";
import UserLists from "../../../components/elements/list/user";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { createPath } from "../../../helpers/path";
import { trpc } from "../../../utils/trpc";
import { Prisma } from "@prisma/client";
import { getRouterId } from "../../../helpers/router";
import { followingPath } from "../../../paths/users/[id]/following";

const UserFollowers: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const id = getRouterId(router);
  const userId = session.data?.user?.id;
  const path = createPath([
    "user.findUniqueUser",
    {
      where: { id },
      include: {
        _count: { select: { following: true, followers: true } },
        followers: {
          where: { followerId: id, followingId: userId },
        },
        following: {
          include: {
            follower: {
              include: {
                _count: { select: { following: true, followers: true } },
              },
            },
          },
        },
        bookmarks: true,
      },
    },
  ]);
  const followPath = followingPath({ router, session });

  const { data } = trpc.useQuery(path);
  const { data: followData } = trpc.useQuery(followPath);
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
      <UserLists data={followData.data.map((follow) => follow.follower)} />
    </UserLayout>
  );
};

export default UserFollowers;
