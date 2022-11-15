import React from "react";
import DefaultSingleColumnLayout from "../single_column/default";
import DefaultTabs, { DefaultTabsProps } from "../../elements/tabs/default";

interface ShowLayoutProps {
	activeTab: string;
	tabs: DefaultTabsProps["tabs"]
	title: React.ReactNode
	contained?: boolean;
	children: React.ReactNode
}
const ShowLayout = ({ title, activeTab, tabs, contained = true, children }: ShowLayoutProps) => {
	return (
		<DefaultSingleColumnLayout contained={contained} subHeader={
			<>
				{title}
				<DefaultTabs value={activeTab} tabs={tabs} />
			</>
		}>
			{children}
		</DefaultSingleColumnLayout>
	)
}

export default ShowLayout