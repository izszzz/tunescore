import type { NextPage } from "next";
import { trpc } from "../../../utils/trpc";
import { useRouter } from "next/router";
import ScoreEditor from "../../../components/elements/editor/score";

const ScoreEdit: NextPage = () => {
	const router = useRouter()
	const music = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	return (
		<ScoreEditor defaultValue={music.data?.score || ""} id={router.query.id as string} resource="music" />
	)
}

export default ScoreEdit;