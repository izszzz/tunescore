import { Prisma, PrismaClient } from "@prisma/client";
import type { GetServerSideProps, NextPage } from "next";
import Link from 'next/link';
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
interface UsersProps {
	data: Prisma.UserGetPayload<null>[]
}
const Users: NextPage<UsersProps> = ({ data }) => {
	return (
		<DefaultSingleColumnLayout>
			<p>users</p>
			<div>
				{data.map(({ id, name }) =>
					<Link key={id} href={{ pathname: "/users/[id]", query: { id } }} ><a>{name}</a></Link>)
				}
			</div>
		</DefaultSingleColumnLayout>
	)
}
export const getServerSideProps: GetServerSideProps<UsersProps> = async () => {
	const prisma = new PrismaClient()
	const data = await prisma.user.findMany()
	return {
		props: { data },
	};
};

export default Users;