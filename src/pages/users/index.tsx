import type { NextPage } from "next";
import Link from 'next/link';
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";

const Users: NextPage = () => {
	const { data: users } = trpc.useQuery(["user.index"]);
	return (
		<DefaultSingleColumnLayout>
			<p>users</p>
			<div>
				{users?.map((user) =>
					<Link key={user.id} href={`/users/${user.id}`} ><a>{user.name}</a></Link>)
				}
			</div>
		</DefaultSingleColumnLayout>
	)
}

export default Users;