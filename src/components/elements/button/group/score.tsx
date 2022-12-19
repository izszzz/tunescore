import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Route } from "nextjs-routes";
import React from "react";
interface ScoreButtonGroup {
  scoreRoute: Route;
  scoreEditRouter: Route;
}
const ScoreButtonGroup = ({
  scoreRoute,
  scoreEditRouter,
}: ScoreButtonGroup) => {
  return (
    <ButtonGroup>
      <Button></Button>
    </ButtonGroup>
  );
};
