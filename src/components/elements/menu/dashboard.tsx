import AttachMoney from "@mui/icons-material/AttachMoney";
import Book from "@mui/icons-material/Book";
import CreditCard from "@mui/icons-material/CreditCard";
import Home from "@mui/icons-material/Home";
import Notifications from "@mui/icons-material/Notifications";
import Settings from "@mui/icons-material/Settings";
import MenuList from "@mui/material/MenuList";
import router from "next/router";

import MenuListItem from "./item";

export interface DashboardMenuProps {
  active?:
    | "home"
    | "library"
    | "credits"
    | "settings"
    | "transactions"
    | "notifications";
}
const DashboardMenu = ({ active }: DashboardMenuProps) => (
  <MenuList>
    <MenuListItem
      icon={<Home />}
      onClick={() => router.push("/dashboard")}
      selected={active === "home"}
    >
      Home
    </MenuListItem>

    <MenuListItem
      icon={<Book />}
      onClick={() => router.push("/dashboard/library")}
      selected={active === "library"}
    >
      Library
    </MenuListItem>

    <MenuListItem
      icon={<AttachMoney />}
      onClick={() => router.push("/dashboard/transactions")}
      selected={active === "transactions"}
    >
      Transaction
    </MenuListItem>

    <MenuListItem
      icon={<CreditCard />}
      onClick={() => router.push("/dashboard/credits")}
      selected={active === "credits"}
    >
      Credit Card
    </MenuListItem>

    <MenuListItem
      icon={<Notifications />}
      onClick={() => router.push("/dashboard/notifications")}
      selected={active === "notifications"}
    >
      Notifications
    </MenuListItem>

    <MenuListItem
      icon={<Settings />}
      onClick={() => router.push("/dashboard/settings")}
      selected={active === "settings"}
    >
      Settings
    </MenuListItem>
  </MenuList>
);

export default DashboardMenu;
