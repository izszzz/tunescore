import React from "react";
import UserLayout from "../../../components/layouts/show/user";
import UserLists from "../../../components/elements/list/user";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { createPath } from "../../../helpers/createPath";
import { trpc } from "../../../utils/trpc";
import { Prisma } from "@prisma/client";

const UserFollowers: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const id = router.query.id as string;
  const userId = session?.user?.id;
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
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
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
  return (
    <UserLayout data={userData} activeTab="">
      <UserLists
        data={userData.following.map((following) => following.follower)}
      />
    </UserLayout>
  );
};

export default UserFollowers;
