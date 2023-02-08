import Book from "@mui/icons-material/Book";
import CreditCard from "@mui/icons-material/CreditCard";
import Settings from "@mui/icons-material/Settings";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import router from "next/router";

export interface DashboardMenuProps {
  active?: "library" | "credits" | "settings";
}
const DashboardMenu = ({ active }: DashboardMenuProps) => (
  <MenuList>
    <MenuItem
      selected={active === "library"}
      onClick={() => router.push("/dashboard/library")}
    >
      <ListItemIcon>
        <Book />
      </ListItemIcon>
      <ListItemText>Library</ListItemText>
    </MenuItem>

    <MenuItem
      selected={active === "credits"}
      onClick={() => router.push("/dashboard/credits")}
    >
      <ListItemIcon>
        <CreditCard />
      </ListItemIcon>
      <ListItemText>Credit Card</ListItemText>
    </MenuItem>

    <MenuItem
      selected={active === "settings"}
      onClick={() => router.push("/dashboard/settings")}
    >
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText>Settings</ListItemText>
    </MenuItem>
  </MenuList>
);

export default DashboardMenu;
