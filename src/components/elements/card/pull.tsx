import React from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Prisma } from "@prisma/client"
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { UseQueryResult } from "react-query";
import Skeleton from "@mui/material/Skeleton";
import Link from "next/link";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

interface PullCardProps {
	query: UseQueryResult<Prisma.PullGetPayload<{
		include: {
			user: true
		}
	}> | null>
}
const PullCard = ({ query: { data, isLoading } }: PullCardProps) => {
	const router = useRouter()
	return (
		<Card variant="outlined">
			{isLoading ?
				<>
					<CardHeader
						avatar={<Skeleton variant="circular" width={40} height={40} />}
						title={<Skeleton variant="rounded" height={30} />}
						subheader={<Skeleton variant="rounded" height={10} width={100} />}
					/>
					<CardContent>
						<Skeleton variant="rounded" height={40} />
					</CardContent>
				</>
				:
				<>
					<CardHeader
						avatar={<Avatar src={data?.user.image || ""} />}
						title={<Typography variant="h5">{data?.title}</Typography>}
						subheader={
							<Link href={{ pathname: "/users/[id]", query: { id: data?.user.id as string } }}>
								<Typography variant="subtitle2" color="text.secondary" >{data?.user.name}</Typography>
							</Link>
						}
					/>
					<CardContent>
						<Typography variant="body1" color="text.secondary">
							{data?.body}
						</Typography>
					</CardContent>
				</>
			}
			<CardActions>
				<Button disabled={isLoading}>Merge PullRequest</Button>
				<Button disabled={isLoading} onClick={() => router.push({ pathname: "/musics/[id]/pulls/[pullId]/score/edit", query: { id: router.query.id as string, pullId: router.query.pullId as string } })}>Edit Score</Button>
			</CardActions>
		</Card>
	)
}

export default PullCard