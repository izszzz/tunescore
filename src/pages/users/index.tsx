import type { NextPage } from "next";
import Link from 'next/link'
import SingleColumnLayout from "../../components/layouts/single_column";
import { trpc } from "../../utils/trpc";

const Users: NextPage = () => {
	const { data: users } = trpc.useQuery(["user.index"]);
	return (
		<SingleColumnLayout>
			<p>hello</p>
			<>
				{users?.map((user) => <Link key={user.id} href="/users/[id]" as={`/users/${user.id}`}><a>{user.name}</a></Link>)}
			</>
		</SingleColumnLayout>
	)
}

export default Users;