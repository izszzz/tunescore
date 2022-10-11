import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography'
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Menu, MenuItem } from "@mui/material";

const Header = () => {
	const { data: session } = useSession()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const handleSignOut = () => {
		signOut();
		handleClose();
	}
	return (
		<AppBar position="static" color="default">
			<Toolbar>
				<Typography variant="h4" sx={{ flexGrow: 1 }}>
					<Link href="/">
						<a>
							tunescore
						</a>
					</Link>
				</Typography>
				<Box sx={{ flexGrow: 0 }}>
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
								<MenuItem onClick={handleClose}>
									<Link href={`/users/${session?.user?.id}`}>
										<a>
											Profile
										</a>
									</Link>
								</MenuItem>
								<MenuItem onClick={handleSignOut}>Logout</MenuItem>
							</Menu>
						</>
						:
						<>
							<Link href="/auth/signin" passHref>
								<Button variant="contained">SignIn</Button>
							</Link>
						</>
					}
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;