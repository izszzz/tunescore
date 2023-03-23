import React from "react";

import Footer from "../../elements/footer";
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
}) => (
  <SingleColumnLayout
    contained={contained}
    footer={<Footer />}
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

export default DefaultSingleColumnLayout;
