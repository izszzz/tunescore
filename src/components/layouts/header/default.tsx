import React from "react";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Header from ".";
import LocaleAutocomplete from "../../elements/autocomplete/locale"
import { useRouter } from "next/router";

const DefaultHeader = () => {
	const { data: session } = useSession()
	const router = useRouter()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const handleSignOut = () => {
		signOut();
		handleClose();
	}
	return (
		<>
			<Header>
				<Typography variant="h4" sx={{ flexGrow: 1 }}>
					<Link href="/">
						<a>
							tunescore
						</a>
					</Link>
				</Typography>
				<Box sx={{ flexGrow: 0 }}>
					<Box display="flex">
						<LocaleAutocomplete />
						{session ?
							<Box>
								<IconButton onClick={handleClick}>
									<Avatar alt="Remy Sharp" src={session.user?.image || ""} />
								</IconButton>
								<Menu
									id="basic-menu"
									anchorEl={anchorEl}
									open={Boolean(anchorEl)}
									onClose={handleClose}
									MenuListProps={{
										'aria-labelledby': 'basic-button',
									}}
								>
									<MenuItem onClick={() => {
										handleClose()
										if (!session?.user) return
										router.push({ pathname: `/users/[id]`, query: { id: session.user.id } })
									}}>
										Profile
									</MenuItem>
									<MenuItem onClick={handleClose}>
										Settings
									</MenuItem>
									<MenuItem onClick={handleSignOut}>Logout</MenuItem>
								</Menu>
							</Box>
							:
							<Box>
								<Button variant="contained" onClick={() => router.push("/auth/signin")}>SignIn</Button>
							</Box>
						}
					</Box>
				</Box>
			</Header>
			<Toolbar />
		</>
	);
};

export default DefaultHeader;