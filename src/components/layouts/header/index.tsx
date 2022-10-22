import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const Header = ({ children, ...props }: AppBarProps) => {
	return (
		<AppBar {...props} color="default">
			<Toolbar>
				{children}
			</Toolbar>
		</AppBar>
	);
};

export default Header;