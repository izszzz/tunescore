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
        {title}
        <DefaultTabs value={activeTab} tabs={tabs} />
      </>
    }
  >
    {children}
  </SingleColumnLayout>
);

export default ShowLayout;
