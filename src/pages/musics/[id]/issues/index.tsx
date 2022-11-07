import Button from "@mui/material/Button";
import { Music } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import IssueList from "../../../../components/elements/list/issue";
import MusicLayout from "../../../../components/layouts/music";
import { trpc } from "../../../../utils/trpc";

const Issues: NextPage = () => {
	const router = useRouter()
	const handleSubmit = (data: Music) => create.mutate(data)
	const create = trpc.useMutation(["music.create"], {
		onSuccess: () => router.push("/musics"),
		onError: error => console.log(error)
	});
	const issuesQuery = trpc.useQuery(["issue.index", { id: router.query.id as string }])
	return (
		<MusicLayout>
			{() =>
				<>
					<p>issues</p>
					<Button onClick={() => router.push({ pathname: "/musics/[id]/issues/new", query: { id: router.query.id as string } })}>New</Button>
					<IssueList issues={issuesQuery.data || []} />
				</>
			}
		</MusicLayout>
	)
}

export default Issues;