import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import UserLayout from "../../../components/layouts/show/user";
import { trpc } from "../../../utils/trpc";
import { userShowQuery } from "../../../paths/users/[id]";
import type { NextPage } from "next";

const User: NextPage = () => {
  const session = useSession();
  const router = useRouter();
  const { data } = trpc.user.findUniqueUser.useQuery(
    userShowQuery({ router, session })
  );
  if (!data) return <></>;
  return (
    <UserLayout data={data} activeTab="info">
      {session.data?.user?.id === data.id && <p>aaa</p>}
    </UserLayout>
  );
};

export default User;
