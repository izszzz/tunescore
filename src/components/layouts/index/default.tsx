import React from "react";
import DefaultHeader, { DefaultHeaderProps } from "../header/default";
import IndexLayout, { IndexLayoutProps } from "./"

export interface DefaultIndexLayoutProps<T> extends IndexLayoutProps<T> {
	providers: DefaultHeaderProps["providers"]
}
function DefaultIndexLayout<T>({ providers, ...props }: DefaultIndexLayoutProps<T>) {
	return <IndexLayout {...props} header={<DefaultHeader providers={providers} />} />
}

export default DefaultIndexLayout