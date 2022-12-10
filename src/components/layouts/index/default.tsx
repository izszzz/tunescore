import React from "react";
import DefaultHeader from "../header/default";
import IndexLayout, { IndexLayoutProps } from "./";

function DefaultIndexLayout<T>({ ...props }: IndexLayoutProps<T>) {
  return <IndexLayout {...props} header={<DefaultHeader />} />;
}

export default DefaultIndexLayout;
