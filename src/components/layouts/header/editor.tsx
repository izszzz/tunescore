import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import Header from ".";
import { getRouterId } from "../../../helpers/router";

interface EditorHeaderProps {
  onSave: () => void;
}
const EditorHeader = ({ onSave }: EditorHeaderProps) => {
  const router = useRouter();
  return (
    <>
      <Header>
        <IconButton
          onClick={() =>
            router.push({
              pathname: "/musics/[id]",
              query: { id: getRouterId(router) },
            })
          }
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Button variant="outlined" endIcon={<CloudDoneIcon />} onClick={onSave}>
          Save
        </Button>
      </Header>
      <Toolbar />
    </>
  );
};

export default EditorHeader;
