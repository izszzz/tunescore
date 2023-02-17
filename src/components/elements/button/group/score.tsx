import React from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import type { ButtonProps } from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useRouter } from "next/router";
import type { Route } from "nextjs-routes";

interface ScoreButtonProps {
  route: Route;
  hidden?: boolean;
  buttonProps?: ButtonProps;
}
interface ScoreButtonGroupProps {
  watch: ScoreButtonProps;
  edit: ScoreButtonProps;
  loading?: boolean;
}
const ScoreButtonGroup = ({ watch, edit, loading }: ScoreButtonGroupProps) => {
  const router = useRouter();
  return (
    <ButtonGroup fullWidth disableElevation>
      {watch.hidden || (
        <LoadingButton
          {...watch.buttonProps}
          variant="outlined"
          loading={loading}
          onClick={() => router.push(watch.route)}
        >
          Watch Score
        </LoadingButton>
      )}
      {edit.hidden || (
        <LoadingButton
          variant="outlined"
          loading={loading}
          onClick={() => router.push(edit.route)}
        >
          Edit Score
        </LoadingButton>
      )}
    </ButtonGroup>
  );
};
export default ScoreButtonGroup;
