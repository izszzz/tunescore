import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";

import { getRouterId } from "../../../helpers/router";

import Header from ".";

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
