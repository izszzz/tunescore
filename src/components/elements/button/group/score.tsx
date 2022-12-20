import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useRouter } from "next/router";
import { Route } from "nextjs-routes";
interface ScoreButtonProps {
  route: Route;
  hidden?: boolean;
}
interface ScoreButtonGroupProps {
  watchButton: ScoreButtonProps;
  editButton: ScoreButtonProps;
  loading?: boolean;
}
const ScoreButtonGroup = ({
  watchButton,
  editButton,
  loading,
}: ScoreButtonGroupProps) => {
  const router = useRouter();
  return (
    <ButtonGroup fullWidth disableElevation>
      {watchButton.hidden || (
        <LoadingButton
          variant="outlined"
          loading={loading}
          onClick={() => router.push(watchButton.route)}
        >
          Watch Score
        </LoadingButton>
      )}
      {editButton.hidden || (
        <LoadingButton
          variant="outlined"
          loading={loading}
          onClick={() => router.push(editButton.route)}
        >
          Edit Score
        </LoadingButton>
      )}
    </ButtonGroup>
  );
};
export default ScoreButtonGroup;
