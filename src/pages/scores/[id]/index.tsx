import type { NextPage } from "next";
import { useRouter } from "next/router";
import ScoreLayout from "../../../components/layouts/score"
import { trpc } from "../../../utils/trpc";

const Score: NextPage = () => {
	const router = useRouter()
	const musicQuery = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	return (
		<ScoreLayout value={musicQuery.data?.score || ""} />
	)
}

export default Score;