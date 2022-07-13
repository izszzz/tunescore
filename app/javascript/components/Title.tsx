import React from "react"
import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"
import * as Routes from "../rails-routes.js"

interface Props {
	music: schema.Music
}
export default function Title({ music }: Props) {
	if (!music) return <>loading</>
	return (
		<Typography>
			{music.user &&
				<Link href={Routes.user_path({ id: music.user.id })}>{music.user.nickname}/</Link>
			}
			<Link href={Routes.music_path({ id: music.id })}>{music.title}</Link>
		</Typography>
	)
}