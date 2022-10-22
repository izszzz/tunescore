import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Link from 'next/link'
import { useRouter } from "next/router";
import Header from "../../../components/layouts/header";
import DefaultSingleColumnLayout from "../../../components/layouts/single_column/default";
import { trpc } from "../../../utils/trpc";

const Music: NextPage = () => {
	const router = useRouter();
	const { data: artist } = trpc.useQuery(["artist.show", { id: router.query.id as string }]);
	return (
		<DefaultSingleColumnLayout>
			<p>artist</p>
			<p>{artist?.name}</p>
			<Link href={`/artists/${router.query.id}/edit`} passHref>
				<Button>Edit</Button>
			</Link>
		</DefaultSingleColumnLayout >
	)
}

export default Music;