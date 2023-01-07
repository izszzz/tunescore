import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import UserLayout from "../../../components/layouts/show/user";
import { trpc } from "../../../utils/trpc";
import { userRepositoriesPath } from "../../../paths/users/[id]";
import MusicLists from "../../../components/elements/list/music";
import type { MusicListQueryType } from "../../../helpers/music";
import type { Prisma } from "@prisma/client";
import type { NextPage } from "next";
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
  const path = userRepositoriesPath({ router, session });
  const { data } = trpc.useQuery(path);
  if (!data) return <></>;
  const userData = data as Prisma.UserGetPayload<{
    include: {
      _count: { select: { following: true; followers: true } };
      followers: true;
      musics: MusicListQueryType;
    };
  }>;
  return (
    <UserLayout data={userData} activeTab="repositories">
      <MusicLists data={userData.musics} />
    </UserLayout>
  );
};

export default User;
