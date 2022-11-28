import React from "react";
import DefaultHeader from "../header/default";
import ShowLayout, { ShowLayoutProps } from "./"

export type DefaultShowLayoutProps = ShowLayoutProps
const DefaultShowLayout = (props: ShowLayoutProps) =>
	<ShowLayout {...props} header={<DefaultHeader />} />

export default DefaultShowLayout