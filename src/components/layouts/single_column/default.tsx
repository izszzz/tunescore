import React from "react";
import DefaultHeader from "../header/default";
import SingleColumnLayout from "./index"

interface DefaultSingleColumnProps {
	subHeader?: React.ReactNode;
	children: React.ReactNode;
}
const DefaultSingleColumnLayout: React.FC<DefaultSingleColumnProps> = ({ subHeader, children }) => {
	return (
		<SingleColumnLayout header={
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