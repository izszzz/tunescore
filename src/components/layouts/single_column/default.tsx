import React from "react";
import DefaultHeader, { DefaultHeaderProps } from "../header/default";
import SingleColumnLayout from "./index"

export interface DefaultSingleColumnLayoutProps {
	subHeader?: React.ReactNode;
	children: React.ReactNode;
	contained?: boolean
	providers: DefaultHeaderProps["providers"]
}
const DefaultSingleColumnLayout: React.FC<DefaultSingleColumnLayoutProps> = ({ providers, subHeader, contained, children }) => {
	return (
		<SingleColumnLayout contained={contained} header={
			<>
				<DefaultHeader providers={providers} />
				{subHeader}
			</>
		}>
			{children}
		</SingleColumnLayout >

	)
}

export default DefaultSingleColumnLayout;