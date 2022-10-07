import Button from "@mui/material/Button";
import type { NextPage } from "next";
import Link from 'next/link'
import { useRouter } from "next/router";
import SingleColumnLayout from "../../../components/layouts/single_column";
import { trpc } from "../../../utils/trpc";

const Music: NextPage = () => {
	const router = useRouter();
	const { data: music } = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	return (
		<SingleColumnLayout>
			<p>music</p>
			<p>{music?.title}</p>
			<Link href={`/musics/${router.query.id}/edit`} passHref>
				<Button>Edit</Button>
			</Link>
		</SingleColumnLayout >
	)
}

export default Music;