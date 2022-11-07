import Button from "@mui/material/Button";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout from "../../../../components/layouts/music";
import { trpc } from "../../../../utils/trpc";

const Issues: NextPage = () => {
	const router = useRouter()
	return (
		<MusicLayout>
			{() =>
				<>
					<p>pullrequests</p>
					<Button onClick={() => router.push(
						{ pathname: "/musics/[id]/pulls/new", query: { id: router.query.id as string } }
					)}>New PullRequest</Button>
				</>
			}
		</MusicLayout>
	)
}

export default Issues;