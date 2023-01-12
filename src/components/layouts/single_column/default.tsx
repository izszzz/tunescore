import React from "react";
import DefaultHeader from "../../elements/header/default";
import SingleColumnLayout from "./index";

export interface DefaultSingleColumnLayoutProps {
  subHeader?: React.ReactNode;
  children: React.ReactNode;
  contained?: boolean;
}
const DefaultSingleColumnLayout: React.FC<DefaultSingleColumnLayoutProps> = ({
  subHeader,
  contained,
  children,
}) => {
  return (
    <SingleColumnLayout
      contained={contained}
      header={
        <>
          <DefaultHeader />
          {subHeader}
        </>
      }
    >
      {children}
    </SingleColumnLayout>
  );
};

export default DefaultSingleColumnLayout;
