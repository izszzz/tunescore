import { useSession } from "next-auth/react";
import UserLayout from "../../../components/layouts/show/user";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../../utils/trpc";
import { userShowPath } from "../../../paths/users/[id]";
interface UserProps {
  data: Prisma.UserGetPayload<{
    include: {
      _count: { select: { followedBy: true; following: true } };
    };
  }>;
  followed: boolean;
}
const User: NextPage<UserProps> = () => {
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
    <UserLayout data={userData} activeTab="info">
      {session.data?.user?.id === data.id && <p>aaa</p>}
    </UserLayout>
  );
};

export default User;
