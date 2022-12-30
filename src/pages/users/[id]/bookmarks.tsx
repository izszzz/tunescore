import React from "react";
import UserLayout from "../../../components/layouts/show/user";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { trpc } from "../../../utils/trpc";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { createPath } from "../../../helpers/path";
import { getRouterId } from "../../../helpers/router";

const UserBookmarks: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const id = getRouterId(router);
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
      bookmarks: true;
    };
  }>;
  return (
    <UserLayout data={userData} activeTab="">
      bookmarks
    </UserLayout>
  );
};

export default UserBookmarks;
