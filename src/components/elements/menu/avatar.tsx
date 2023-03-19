import AccountBox from "@mui/icons-material/AccountBox";
import Dashboard from "@mui/icons-material/Dashboard";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import router from "next/router";
import { signOut, useSession } from "next-auth/react";

import { getCurrentUserId } from "../../../helpers/user";

import MenuListItem from "./item";

import MenuManager from ".";

const AvatarMenuManager = () => {
  const { data } = useSession(),
    id = getCurrentUserId(data);
  return (
    <MenuManager
      button={(handleOpen) => (
        <IconButton onClick={handleOpen}>
          <Avatar alt="Remy Sharp" src={data?.user?.image || ""} />
        </IconButton>
      )}
    >
      {(handleClose) => [
        <MenuListItem
          icon={<AccountBox />}
          key="profile"
          onClick={() => {
            handleClose();
            id && router.push({ pathname: `/users/[id]`, query: { id } });
          }}
        >
          Profile
        </MenuListItem>,
        <MenuListItem
          icon={<Dashboard />}
          key="dashboard"
          onClick={() => {
            handleClose();
            router.push(`/dashboard`);
          }}
        >
          Dashboard
        </MenuListItem>,
        <MenuListItem
          icon={<Settings />}
          key="settings"
          onClick={() => {
            handleClose();
            router.push("/dashboard/settings");
          }}
        >
          Settings
        </MenuListItem>,
        <MenuListItem
          icon={<Logout />}
          key="logout"
          onClick={() => {
            handleClose();
            signOut();
          }}
        >
          Logout
        </MenuListItem>,
      ]}
    </MenuManager>
  );
};

export default AvatarMenuManager;
