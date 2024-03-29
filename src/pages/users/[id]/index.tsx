import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import UserLayout from "../../../components/layouts/show/user";
import type { UserLayoutProps } from "../../../components/layouts/show/user";
import { userShowQuery } from "../../../paths/users/[id]";
import { trpc } from "../../../utils/trpc";

const User: NextPage = () => {
  const { data: session } = useSession(),
    router = useRouter<"/users/[id]">(),
    query = userShowQuery({ router, session }),
    { data } = trpc.user.findUniqueUser.useQuery(query);
  if (!data) return null;
  const userData = data as unknown as UserLayoutProps["data"];
  return (
    <UserLayout activeTab="info" data={userData} query={query}>
      <></>
    </UserLayout>
  );
};

export default User;
