import type { NextPage } from "next";
import Header from "../../components/elements/Header";
import { trpc } from "../../utils/trpc";

const Index: NextPage = () => {
	const users = trpc.useQuery(["user.index"]);
	return (
		<>
			<Header />
			<p>hello</p>
			<>
				{users.data?.map((user) => <p key={user.id}>{user.name}</p>)}
			</>
		</>
	)
}

export default Index;