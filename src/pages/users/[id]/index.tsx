import { useSession } from "next-auth/react";
import UserLayout from "../../../components/layouts/show/user";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { createPath } from "../../../helpers/createPath";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
interface UserProps {
  data: Prisma.UserGetPayload<{
    include: {
      _count: { select: { followedBy: true; following: true } };
    };
  }>;
  followed: boolean;
}
const User: NextPage<UserProps> = () => {
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
    <UserLayout data={userData} activeTab="info">
      {session?.user?.id === data.id && <p>aaa</p>}
    </UserLayout>
  );
};

export default User;
