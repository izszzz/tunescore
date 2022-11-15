import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import UserLayout from "../../../components/layouts/show/user";
import UserList from "../../../components/elements/list/user";
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
interface UserProps {
	data: Prisma.UserGetPayload<{
		include: {
			followedBy: {
				include: {
					_count: { select: { followedBy: true, following: true } }
				}
			},
			_count: { select: { followedBy: true, following: true } }
		}
	}>
	followed: boolean
}
const UserFollowers: NextPage<UserProps> = ({ data, followed }) => {
	return (
		<UserLayout data={data} followed={followed} activeTab="">
			<UserList users={data.followedBy} />
		</UserLayout>
	)
}
export const getServerSideProps: GetServerSideProps<UserProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.user.findUnique({
		where: { id: ctx.query.id as string }, include: {
			followedBy: {
				include: {
					_count: { select: { followedBy: true, following: true } }
				}
			},
			_count: { select: { followedBy: true, following: true } }
		}
	})
	if (!data) return { notFound: true };
	const session = await getServerAuthSession(ctx)
	const followed = await prisma.user.findFirst({
		where: {
			id: ctx.query.id as string,
		},
		include: {
			following: { where: { id: session?.user?.id } },
		},
	})
	return {
		props: { data, followed: !!followed?.following.length },
	};
};

export default UserFollowers