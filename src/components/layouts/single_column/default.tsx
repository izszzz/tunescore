import React from "react";
import DefaultHeader from "../header/default";
import SingleColumnLayout from "./index"

interface DefaultSingleColumnProps {
	subHeader?: React.ReactNode;
	children: React.ReactNode;
	contained?: boolean
}
const DefaultSingleColumnLayout: React.FC<DefaultSingleColumnProps> = ({ subHeader, contained, children }) => {
	return (
		<SingleColumnLayout contained={contained} header={
			<>
				<DefaultHeader />
				{subHeader}
			</>
		}>
			{children}
		</SingleColumnLayout >

	)
}

export default DefaultSingleColumnLayout;