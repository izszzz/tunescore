import Button from "@mui/material/Button";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../components/layouts/header";
import DefaultSingleColumnLayout from "../../components/layouts/single_column/default";
import { trpc } from "../../utils/trpc";

const User: NextPage = () => {
	const router = useRouter();
	const { data: session } = useSession()
	const { data: user } = trpc.useQuery(["user.show", { id: router.query.id as string }]);
	return (
		<DefaultSingleColumnLayout >
			<p>{user?.name}</p>
			{session?.user?.id == user?.id && (
				< Link href="/users/edit" passHref>
					<Button>Edit</Button>
				</Link>
			)}
		</DefaultSingleColumnLayout >
	)
}

export default User;
