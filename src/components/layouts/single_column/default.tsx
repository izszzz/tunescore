import type { PropsWithChildren } from "react";
import React from "react";

import Footer from "../../elements/footer";
import DefaultHeader from "../../elements/header/default";

import SingleColumnLayout from "./index";

interface DefaultSingleColumnLayoutProps {
  subHeader?: React.ReactNode;
  contained?: boolean;
}
const DefaultSingleColumnLayout = ({
  subHeader,
  contained,
  children,
}: PropsWithChildren<DefaultSingleColumnLayoutProps>) => (
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
