import Box from "@mui/material/Box";
import React from "react";
import DefaultTabs, { DefaultTabsProps } from "../../elements/tabs/default";
import SingleColumnLayout, { SingleColumnLayoutProps } from "../single_column";

export interface ShowLayoutProps extends SingleColumnLayoutProps {
  activeTab: string;
  tabs: DefaultTabsProps["tabs"];
  title: React.ReactNode;
}
const ShowLayout = ({
  header,
  title,
  activeTab,
  tabs,
  contained = true,
  children,
}: ShowLayoutProps) => (
  <SingleColumnLayout
    contained={contained}
    header={
      <>
        {header}
        <Box my={3}>{title}</Box>
        <DefaultTabs value={activeTab} tabs={tabs} />
      </>
    }
  >
    <Box my={3}>{children}</Box>
  </SingleColumnLayout>
);

export default ShowLayout;
