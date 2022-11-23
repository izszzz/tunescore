import React from "react";
import DefaultHeader, { DefaultHeaderProps } from "../header/default";
import IndexLayout, { IndexLayoutProps } from "./"

export interface DefaultIndexLayoutProps extends IndexLayoutProps {
	providers: DefaultHeaderProps["providers"]
}
const DefaultIndexLayout = ({ providers, ...props }: DefaultIndexLayoutProps) =>
	<IndexLayout {...props} header={<DefaultHeader providers={providers} />} />

export default DefaultIndexLayout