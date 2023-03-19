import React from "react";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import type { Route } from "nextjs-routes";

import Header from ".";

export interface EditorHeaderProps {
  backRoute: Route;
  onSave: () => void;
  conflict?: boolean;
  onResolve?: () => void;
}
const EditorHeader = ({
  conflict,
  backRoute,
  onSave,
  onResolve,
}: EditorHeaderProps) => {
  const router = useRouter();
  return (
    <>
      <Header>
        <IconButton onClick={() => router.push(backRoute)}>
          <ArrowBackIosIcon />
        </IconButton>
        {conflict && (
          <Button onClick={onResolve} variant="outlined">
            Resolve Conflict
          </Button>
        )}
        <Button endIcon={<CloudDoneIcon />} onClick={onSave} variant="outlined">
          Save
        </Button>
      </Header>
      <Toolbar />
    </>
  );
};

export default EditorHeader;
