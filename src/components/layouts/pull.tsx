import React, { useMemo } from "react";
import { useRouter } from "next/router";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import { trpc } from "../../utils/trpc";
import { UseQueryResult } from "react-query";
import DefaultTabs, { DefaultTabsProps } from "../elements/tabs/default";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface PullLayoutProps {
	active: "code" | "conversation";
	children: (data: UseQueryResult<Prisma.PullGetPayload<{ include: { user: true } }> | null>) => React.ReactNode;
}

const PullLayout: React.FC<PullLayoutProps> = ({ active, children }) => {
	const router = useRouter()
	const pullQuery = trpc.useQuery(["pull.show", { id: router.query.pullId as string }]);
	const { data, isLoading } = pullQuery
	const tabs: DefaultTabsProps["tabs"] = useMemo(() => ([
		{ label: "conversation", href: { pathname: "/musics/[id]/pulls/[pullId]", query: { id: router.query.id as string, pullId: router.query.pullId as string } } },
		{ label: "code", href: { pathname: "/musics/[id]/pulls/[pullId]/code", query: { id: router.query.id as string, pullId: router.query.pullId as string } } },
	]), [router.query])

	return (
		<>
			<Box display="flex">
				<Box >
					<Avatar src={data?.user.image || ""} />
					<Link href={{ pathname: "/users/[id]", query: { id: data?.user.id as string } }}>
						<Typography variant="subtitle2" color="text.secondary" >{data?.user.name}</Typography>
					</Link>
				</Box>
				<Typography variant="h5">
					{data?.title}
				</Typography>
			</Box>
			<Button variant="outlined" disabled={isLoading}>Merge PullRequest</Button>
			<Button variant="outlined" disabled={isLoading} onClick={() => router.push({ pathname: "/musics/[id]/pulls/[pullId]/score/edit", query: { id: router.query.id as string, pullId: router.query.pullId as string } })}>Edit Score</Button>
			<DefaultTabs value={active} tabs={tabs} />
			{children(pullQuery)}
		</>
	)
}

export default PullLayout;