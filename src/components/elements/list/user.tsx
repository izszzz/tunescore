import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { Prisma } from "@prisma/client"
import { useRouter } from "next/router"

interface UserListProps {
	users: (Prisma.UserGetPayload<{
		include: {
			_count: { select: { followedBy: true, following: true } }
		}
	}>)[]
}
const UserList = ({ users }: UserListProps) => {
	const router = useRouter()
	return (
		<List>
			{users.map(user =>
				<>
					<ListItem key={user.id} disablePadding onClick={() => router.push("/users/" + user.id)}>
						<ListItemAvatar>
							<Avatar alt={user.name || ""} src={user.image || ""} />
						</ListItemAvatar>
						<ListItemButton>
							<ListItemText primary={user.name}
								secondary={
									<>
										<Typography
											sx={{ display: 'inline' }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											following : {user._count.following}  / followers : {user._count.followedBy}
										</Typography>
									</>
								}
							/>
						</ListItemButton>
					</ListItem>
					<Divider variant="inset" component="li" />
				</>
			)
			}
		</List >
	)
}

export default UserList