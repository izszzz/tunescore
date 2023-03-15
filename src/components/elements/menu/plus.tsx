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
        key="music"
        icon={<MusicNote />}
        onClick={() => {
          handleClose();
          router.push("/musics/new");
        }}
      >
        Music
      </MenuListItem>,
      <MenuListItem
        key="artist"
        icon={<Person />}
        onClick={() => {
          handleClose();
          router.push("/artists/new");
        }}
      >
        Artist
      </MenuListItem>,
      <MenuListItem
        key="band"
        icon={<Group />}
        onClick={() => {
          handleClose();
          router.push("/bands/new");
        }}
      >
        Band
      </MenuListItem>,
      <MenuListItem
        key="album"
        icon={<Album />}
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
