import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import ScoreEditor from "../../../../../../components/elements/editor/score";
import { trpc } from "../../../../../../utils/trpc";

const Pull: NextPage = () => {
	const router = useRouter()
	const pullQuery = trpc.useQuery(["pull.show", { id: router.query.pullId as string }])
	return (
		<ScoreEditor defaultValue={pullQuery.data?.score || ""} id={router.query.pullId as string} resource="pull" />
	)
}
export default Pull