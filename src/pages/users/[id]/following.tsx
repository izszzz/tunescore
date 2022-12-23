import React from "react";
import { PrismaClient } from "@prisma/client";
import UserLayout from "../../../components/layouts/show/user";
import UserLists from "../../../components/elements/list/user";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import type { Prisma} from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
interface UserProps {
  data: Prisma.UserGetPayload<{
    include: {
      following: {
        include: {
          _count: { select: { followedBy: true; following: true } };
        };
      };
      _count: { select: { followedBy: true; following: true } };
    };
  }>;
  followed: boolean;
}
const UserFollowers: NextPage<UserProps> = ({ data, followed }) => {
  return (
    <UserLayout data={data} followed={followed} activeTab="">
      <UserLists users={data.following} />
    </UserLayout>
  );
};
export const getServerSideProps: GetServerSideProps<UserProps> = async (
  ctx
) => {
  const prisma = new PrismaClient();
  const data = await prisma.user.findUnique({
    where: { id: ctx.query.id as string },
    include: {
      following: {
        include: {
          _count: { select: { followedBy: true, following: true } },
        },
      },
      _count: { select: { followedBy: true, following: true } },
    },
  });
  if (!data) return { notFound: true };
  const session = await getServerAuthSession(ctx);
  const followed = await prisma.user.findFirst({
    where: {
      id: ctx.query.id as string,
    },
    include: {
      following: { where: { id: session?.user?.id } },
    },
  });
  return {
    props: { data, followed: !!followed?.following.length },
  };
};

export default UserFollowers;
