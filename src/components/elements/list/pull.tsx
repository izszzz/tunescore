import React from "react"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { Prisma, PullStatus } from "@prisma/client"
import { useRouter } from "next/router"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LockIcon from '@mui/icons-material/Lock';
import ListItemIcon from "@mui/material/ListItemIcon"
interface PullListProps {
	pulls: (Prisma.PullGetPayload<{
		include: {
			user: true
		}
	}>)[]
}
const PullList = ({ pulls }: PullListProps) => {
	const router = useRouter()
	return (
		<List>
			<Divider component="li" />
			{pulls.map(pull =>
				<React.Fragment key={pull.id}>
					<ListItem disablePadding onClick={() => router.push({ pathname: "/musics/[id]/pulls/[pullId]", query: { id: router.query.id as string, pullId: pull.id } })}>
						<ListItemButton>
							<ListItemIcon>
								<PullStatusIcon status={pull.status} />
							</ListItemIcon>
							<ListItemText primary={
								<Typography variant="h6" >
									{pull.title}
								</Typography>
							}
								secondary={
									<Box display="flex" alignItems="center">
										<Typography
											mr={1}
											variant="body2"
											color="text.subprimary">
											created by {pull.user.name}
										</Typography>
										<Avatar
											src={pull.user.image || ""}
											sx={{ width: 24, height: 24 }} />
									</Box>
								} />
						</ListItemButton>
					</ListItem>
					<Divider component="li" />
				</React.Fragment>
			)}
		</List >
	)
}
interface PullStatusIconProps {
	status: PullStatus
}
const PullStatusIcon = ({ status }: PullStatusIconProps) => {
	if (status === "DRAFT") return <LockIcon color="success" />
	if (status === "OPEN") return <TaskAltIcon color="success" />
	if (status === "CLOSED") return <HighlightOffIcon color="error" />
	if (status === "MERGED") return <TaskAltIcon color="disabled" />
	return <>no status</>
}

export default PullList