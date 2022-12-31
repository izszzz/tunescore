import React from "react";
import UserLayout from "../../../components/layouts/show/user";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { trpc } from "../../../utils/trpc";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { userShowPath } from "../../../paths/users/[id]";

const UserBookmarks: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const path = userShowPath({ router, session });
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
