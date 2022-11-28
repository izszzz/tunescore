import type { NextPage } from "next";
import ScoreEditor from "../../../components/elements/editor/score";
import { trpc } from "../../../utils/trpc";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";


const ScoreEdit: NextPage = () => {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const { data } = trpc.useQuery(["music.show", { where: { id: router.query.id as string } }], { onError: () => { enqueueSnackbar("music.show error") } })
	if (!data) return <></>
	return (
		<ScoreEditor defaultValue={data.score} />
	)
}



export default ScoreEdit;