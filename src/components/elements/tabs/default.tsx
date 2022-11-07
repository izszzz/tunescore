import React from "react"
import { useRouter } from "next/router"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import { Route } from "nextjs-routes"

interface DefaultTabsProps {
	tabs: { label: string, href: Route, disabled?: boolean }[]
}
const DefaultTabs = ({ tabs }: DefaultTabsProps) => {
	const router = useRouter()
	const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: Route) => { router.push(newValue) }
	if (!router) return <p>loading</p>;
	return (
		<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
			<Tabs value={router.asPath} onChange={handleChange}>
				{tabs.map((tab, i) => <Tab key={i} label={tab.label} value={tab.href} disabled={tab.disabled} />)}
			</Tabs>
		</Box>
	)
}
export default DefaultTabs