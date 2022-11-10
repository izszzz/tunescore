import Button from "@mui/material/Button";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MusicLayout from "../../../../components/layouts/music";
import PullList from "../../../../components/elements/list/pull";
import { trpc } from "../../../../utils/trpc";

const Issues: NextPage = () => {
	const router = useRouter()
	const pullsQuery = trpc.useQuery(["pull.index", { id: router.query.id as string }])
	return (
		<MusicLayout active="pullrequests">
			{() =>
				<>
					<Button variant="outlined" onClick={() => router.push(
						{ pathname: "/musics/[id]/pulls/new", query: { id: router.query.id as string } }
					)}>New PullRequest</Button>
					<PullList pulls={pullsQuery.data || []} />
				</>
			}
		</MusicLayout>
	)
}

export default Issues;