import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import AccountBox from "@mui/icons-material/AccountBox";
import { signOut, useSession } from "next-auth/react";
import router from "next/router";
import { getCurrentUserId } from "../../../helpers/user";
import MenuListItem from "./item";
import MenuManager from ".";

const AvatarMenuManager = () => {
  const session = useSession();
  const id = getCurrentUserId(session);
  return (
    <MenuManager
      button={(handleOpen) => (
        <IconButton onClick={handleOpen}>
          <Avatar alt="Remy Sharp" src={session.data?.user?.image || ""} />
        </IconButton>
      )}
    >
      {(handleClose) => [
        <MenuListItem
          key="profile"
          icon={<AccountBox />}
          onClick={() => {
            handleClose();
            id &&
              router.push({
                pathname: `/users/[id]`,
                query: { id },
              });
          }}
        >
          Profile
        </MenuListItem>,
        <MenuListItem
          icon={<Settings />}
          key="settings"
          onClick={() => {
            handleClose();
            id &&
              router.push({
                pathname: `/users/[id]/settings`,
                query: { id },
              });
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
