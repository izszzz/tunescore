import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import UserLayout from "../../../components/layouts/show/user";
import { trpc } from "../../../utils/trpc";
import { userRepositoriesQuery } from "../../../paths/users/[id]";
import MusicLists from "../../../components/elements/list/music";
import type { NextPage } from "next";

const User: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const { data } = trpc.user.findUniqueUser.useQuery(
    userRepositoriesQuery({ router, session })
  );
  if (!data) return <></>;
  return (
    <UserLayout data={data} activeTab="repositories">
      <MusicLists data={data.musics} />
    </UserLayout>
  );
};

export default User;
