import React from "react";
import DefaultHeader, { DefaultHeaderProps } from "../header/default";
import ShowLayout, { ShowLayoutProps } from "./"

export interface DefaultShowLayoutProps extends ShowLayoutProps {
	providers: DefaultHeaderProps["providers"]
}
const DefaultShowLayout = ({ providers, ...props }: DefaultShowLayoutProps) =>
	<ShowLayout {...props} header={<DefaultHeader providers={providers} />} />

export default DefaultShowLayout