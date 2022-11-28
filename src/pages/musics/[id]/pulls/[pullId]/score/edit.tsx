import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import ScoreEditor from "../../../../../../components/elements/editor/score";
import { trpc } from "../../../../../../utils/trpc";

const Pull: NextPage = () => {
	const router = useRouter()
	const pullQuery = trpc.useQuery(["pull.show", { where: { id: router.query.pullId as string } }])
	const update = trpc.useMutation(["pull.update"])
	const handleSave = (value: string) => {
		update.mutate({ id: router.query.pullId as string, score: { update: { changed: value } } })
	}
	return (
		<ScoreEditor defaultValue={pullQuery.data?.score.changed || ""} onSave={handleSave} />
	)
}
export default Pull