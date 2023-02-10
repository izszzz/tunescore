import AttachMoney from "@mui/icons-material/AttachMoney";
import Book from "@mui/icons-material/Book";
import CreditCard from "@mui/icons-material/CreditCard";
import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import router from "next/router";

export interface DashboardMenuProps {
  active?: "home" | "library" | "credits" | "settings" | "transactions";
}
const DashboardMenu = ({ active }: DashboardMenuProps) => (
  <MenuList>
    <MenuItem
      selected={active === "home"}
      onClick={() => router.push("/dashboard")}
    >
      <ListItemIcon>
        <Home />
      </ListItemIcon>
      <ListItemText>Home</ListItemText>
    </MenuItem>

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
      selected={active === "transactions"}
      onClick={() => router.push("/dashboard/transactions")}
    >
      <ListItemIcon>
        <AttachMoney />
      </ListItemIcon>
      <ListItemText>Transaction</ListItemText>
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
