import React from "react";
import DefaultHeader from "../../elements/header/default";
import IndexLayout from "./";
import type { IndexLayoutProps } from "./";

function DefaultIndexLayout<T>({ ...props }: IndexLayoutProps<T>) {
  return <IndexLayout {...props} header={<DefaultHeader />} />;
}

export default DefaultIndexLayout;
