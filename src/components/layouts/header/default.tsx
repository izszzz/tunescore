import React, { useEffect } from "react";
import { useState } from "react";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from '@mui/material/Typography'
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Header from ".";
import LocaleAutocomplete from "../../elements/autocomplete/locale"
import GoogleIcon from "../../elements/icon/google"


const DefaultHeader = () => {
	const { data: session } = useSession()
	const [open, setOpen] = useState(false)
	const [providers, setProviders] = useState<Awaited<ReturnType<typeof getProviders>>>()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const router = useRouter()
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const handleOpenModal = () => setOpen(true)
	const handleCloseDialog = () => setOpen(false)
	const handleSignOut = () => {
		signOut();
		handleClose();
	}
	useEffect(() => {
		(async () => { setProviders(await getProviders()) })()
	}, [])
	return (
		<>
			<Header>
				<Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
					<Link href="/">
						<a>
							tunescore
						</a>
					</Link>
				</Typography>
				<Grid container spacing={1} sx={{ flexGrow: 1 }}>
					<Grid item xs={10} />
					<Grid item xs={1}>
						<LocaleAutocomplete />
					</Grid>
					<Grid item xs={1} display="flex" alignItems="stretch" >
						{session ?
							<>
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
							</>
							:
							<Button variant="contained" onClick={handleOpenModal} disabled={!providers} disableElevation>SignIn</Button>
						}
					</Grid>
				</Grid>
			</Header>
			<Toolbar />
			<Dialog
				open={open}
				onClose={handleCloseDialog}
			>
				<DialogTitle>
					Sign In
				</DialogTitle>
				<DialogActions>
					{providers && Object.values(providers).map((provider) =>
						<Button key={provider.name} variant="outlined" startIcon={<GoogleIcon />} onClick={() => signIn(provider.id, { callbackUrl: "http://localhost/" })}>Login with {provider.name}</Button>
					)}
				</DialogActions>
			</Dialog>
		</>
	);
};

export default DefaultHeader;