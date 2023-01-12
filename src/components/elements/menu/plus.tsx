import IconButton from "@mui/material/IconButton";
import Add from "@mui/icons-material/Add";
import router from "next/router";
import ResourceIcon from "../icon/resource";
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
        icon={<ResourceIcon resource="MUSIC" />}
        onClick={() => {
          handleClose();
          router.push("/musics/new");
        }}
      >
        Music
      </MenuListItem>,
      <MenuListItem
        key="artist"
        icon={<ResourceIcon resource="ARTIST" />}
        onClick={() => {
          handleClose();
          router.push("/artists/new");
        }}
      >
        Artist
      </MenuListItem>,
      <MenuListItem
        key="band"
        icon={<ResourceIcon resource="BAND" />}
        onClick={() => {
          handleClose();
          router.push("/bands/new");
        }}
      >
        Band
      </MenuListItem>,
      <MenuListItem
        key="album"
        icon={<ResourceIcon resource="ALBUM" />}
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
