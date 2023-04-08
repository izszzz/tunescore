import type { PropsWithChildren } from "react";

import Grid from "@mui/material/Grid";

import type { DashboardMenuProps } from "../elements/menu/dashboard";
import DashboardMenu from "../elements/menu/dashboard";

import DefaultSingleColumnLayout from "./single_column/default";

interface DashboardLayoutProps {
  active?: DashboardMenuProps["active"];
}
const DashboardLayout = ({
  active,
  children,
}: PropsWithChildren<DashboardLayoutProps>) => (
  <DefaultSingleColumnLayout contained>
    <Grid container my={3} spacing={1}>
      <Grid item xs={3}>
        <DashboardMenu active={active} />
      </Grid>
      <Grid item xs={9}>
        {children}
      </Grid>
    </Grid>
  </DefaultSingleColumnLayout>
);

export default DashboardLayout;
