import type { PropsWithChildren } from "react";
import React from "react";

import Box from "@mui/material/Box";

import Footer from "../../elements/footer";
import DefaultTabs from "../../elements/tabs/default";
import type { DefaultTabsProps } from "../../elements/tabs/default";
import SingleColumnLayout from "../single_column";
import type { SingleColumnLayoutProps } from "../single_column";

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
}: PropsWithChildren<ShowLayoutProps>) => (
  <SingleColumnLayout
    contained={contained}
    footer={<Footer />}
    header={
      <>
        {header}
        <Box my={3}>{title}</Box>
        <DefaultTabs tabs={tabs} value={activeTab} />
      </>
    }
  >
    <Box my={3}>{children}</Box>
  </SingleColumnLayout>
);

export default ShowLayout;
