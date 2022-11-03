import React from "react"
import { useRouter } from "next/router"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"

interface DefaultTabsProps {
	tabs: { label: string, href: string }[]
}
const DefaultTabs = ({ tabs }: DefaultTabsProps) => {
	const router = useRouter()
	const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: any) => { router.push(newValue) }
	if (!router) return <p>loading</p>;
	return (
		<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
			<Tabs value={router.asPath} onChange={handleChange}>
				{tabs.map((tab, i) => <Tab key={i} label={tab.label} value={tab.href} />)}
			</Tabs>
		</Box>
	)
}
export default DefaultTabs