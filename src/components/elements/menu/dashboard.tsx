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
      selected={active === "home"}
      onClick={() => router.push("/dashboard")}
    >
      Home
    </MenuListItem>

    <MenuListItem
      icon={<Book />}
      selected={active === "library"}
      onClick={() => router.push("/dashboard/library")}
    >
      Library
    </MenuListItem>

    <MenuListItem
      icon={<AttachMoney />}
      selected={active === "transactions"}
      onClick={() => router.push("/dashboard/transactions")}
    >
      Transaction
    </MenuListItem>

    <MenuListItem
      icon={<CreditCard />}
      selected={active === "credits"}
      onClick={() => router.push("/dashboard/credits")}
    >
      Credit Card
    </MenuListItem>

    <MenuListItem
      icon={<Notifications />}
      selected={active === "notifications"}
      onClick={() => router.push("/dashboard/notifications")}
    >
      Notifications
    </MenuListItem>

    <MenuListItem
      icon={<Settings />}
      selected={active === "settings"}
      onClick={() => router.push("/dashboard/settings")}
    >
      Settings
    </MenuListItem>
  </MenuList>
);

export default DashboardMenu;
