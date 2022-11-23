import React, { useEffect, useMemo, useState } from "react";
import * as Diff3 from 'node-diff3';
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { trpc } from "../../../utils/trpc";
import { DefaultTabsProps } from "../../elements/tabs/default";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Prisma } from "@prisma/client";
import ShowLayout, { ShowLayoutProps } from "./";

interface PullLayoutProps extends Pick<ShowLayoutProps, "children"> {
	data: Prisma.PullGetPayload<{ include: { music: true, user: true } }>
	activeTab: "code" | "conversation";
}

const PullLayout: React.FC<PullLayoutProps> = ({ data, activeTab, children }) => {
	const [conflict, setConflict] = useState(true)
	const [diff, setDiff] = useState(true)
	const router = useRouter()
	const update = trpc.useMutation(["pull.update"]);
	const tabs: DefaultTabsProps["tabs"] = useMemo(() => ([
		{ label: "conversation", href: { pathname: "/musics/[id]/pulls/[pullId]", query: { id: router.query.id as string, pullId: router.query.pullId as string } } },
		{ label: "code", href: { pathname: "/musics/[id]/pulls/[pullId]/code", query: { id: router.query.id as string, pullId: router.query.pullId as string } } },
	]), [router.query])
	const handleMerge = () => { update.mutate({ id: router.query.pullId as string, status: "MERGED", music: { update: { score: data.score.changed } } }) }
	const handleClose = () => { update.mutate({ id: router.query.pullId as string, status: "CLOSED" }) }
	useEffect(() => {
		if (data) {
			const merged = Diff3.mergeDiff3(data.music.score, data.score.original, data.score.changed)
			setConflict(merged.conflict)
			setDiff(data.score.original !== data.score.changed)
		}
	}, [data])

	return (
		<ShowLayout
			contained={false}
			activeTab={activeTab}
			tabs={tabs}
			title={
				<>
					<Box display="flex">
						<Box >
							<Avatar src={data.user.image || ""} />
							<Link href={{ pathname: "/users/[id]", query: { id: data.user.id as string } }}>
								<Typography variant="subtitle2" color="text.secondary" >{data.user.name}</Typography>
							</Link>
						</Box>
						<Typography variant="h5">
							{data.title}
						</Typography>
					</Box>
					<Button variant="outlined" color="success" disabled={conflict || !diff} onClick={handleMerge} >Merge PullRequest</Button>
					<Button variant="outlined" color="error" disabled={conflict} onClick={handleClose} >Close PullRequest</Button>
					<Button variant="outlined" onClick={() => router.push({ pathname: "/musics/[id]/pulls/[pullId]/score", query: { id: router.query.id as string, pullId: router.query.pullId as string } })}>Watch Score</Button>
					<Button variant="outlined" onClick={() => router.push({ pathname: "/musics/[id]/pulls/[pullId]/score/edit", query: { id: router.query.id as string, pullId: router.query.pullId as string } })}>Edit Score</Button>
				</>
			}
		>
			{children}
		</ShowLayout>
	)
}

export default PullLayout;