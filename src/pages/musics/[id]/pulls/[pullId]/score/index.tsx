import type { NextPage } from "next";
import { useRouter } from "next/router";
import ScoreLayout from "../../../../../../components/layouts/score"
import { trpc } from "../../../../../../utils/trpc";

const Score: NextPage = () => {
	const router = useRouter()
	const pullQuery = trpc.useQuery(["pull.show", { where: { id: router.query.pullId as string } }]);
	return (
		<ScoreLayout value={pullQuery.data?.score.changed || ""} />
	)
}

export default Score;