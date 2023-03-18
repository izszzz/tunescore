import Add from "@mui/icons-material/Add";
import Album from "@mui/icons-material/Album";
import Group from "@mui/icons-material/Group";
import MusicNote from "@mui/icons-material/MusicNote";
import Person from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import router from "next/router";

import MenuListItem from "./item";

import MenuManager from ".";

const PlusMenuManager = () => (
  <MenuManager
    button={(handleOpen) => (
      <IconButton onClick={handleOpen}>
        <Add />
      </IconButton>
    )}
  >
    {(handleClose) => [
      <MenuListItem
        icon={<MusicNote />}
        key="music"
        onClick={() => {
          handleClose();
          router.push("/musics/new");
        }}
      >
        Music
      </MenuListItem>,
      <MenuListItem
        icon={<Person />}
        key="artist"
        onClick={() => {
          handleClose();
          router.push("/artists/new");
        }}
      >
        Artist
      </MenuListItem>,
      <MenuListItem
        icon={<Group />}
        key="band"
        onClick={() => {
          handleClose();
          router.push("/bands/new");
        }}
      >
        Band
      </MenuListItem>,
      <MenuListItem
        icon={<Album />}
        key="album"
        onClick={() => {
          handleClose();
          router.push("/albums/new");
        }}
      >
        Album
      </MenuListItem>,
    ]}
  </MenuManager>
);
export default PlusMenuManager;
