import { PrismaClient } from "@prisma/client";
import { useSession } from "next-auth/react";
import UserLayout from "../../../components/layouts/show/user";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import type { Prisma} from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
interface UserProps {
  data: Prisma.UserGetPayload<{
    include: { _count: { select: { followedBy: true; following: true } } };
  }>;
  followed: boolean;
}
const User: NextPage<UserProps> = ({ data, followed }) => {
  const { data: session } = useSession();
  return (
    <UserLayout data={data} followed={followed} activeTab="info">
      {session?.user?.id == data.id && <p>aaa</p>}
    </UserLayout>
  );
};

export const getServerSideProps: GetServerSideProps<UserProps> = async (
  ctx
) => {
  const prisma = new PrismaClient();
  const data = await prisma.user.findUnique({
    where: { id: ctx.query.id as string },
    include: { _count: { select: { followedBy: true, following: true } } },
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

export default User;
