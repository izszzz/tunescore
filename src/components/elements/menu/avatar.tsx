import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import Settings from "@mui/icons-material/Settings";
import AccountBox from "@mui/icons-material/AccountBox";
import { signOut, useSession } from "next-auth/react";
import router from "next/router";
import { ListItemIcon, ListItemText } from "@mui/material";
import { getCurrentUserId } from "../../../helpers/user";
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
        <MenuItem
          key="profile"
          onClick={() => {
            handleClose();
            id &&
              router.push({
                pathname: `/users/[id]`,
                query: { id },
              });
          }}
        >
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>,
        <MenuItem key="settings" onClick={handleClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>,
        <MenuItem
          key="logout"
          onClick={() => {
            handleClose();
            signOut();
          }}
        >
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>,
      ]}
    </MenuManager>
  );
};

export default AvatarMenuManager;
