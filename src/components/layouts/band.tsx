import React from "react";
import { useRouter } from "next/router";
import { UseQueryResult } from "react-query";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import { trpc } from "../../utils/trpc";
import DefaultSingleColumnLayout from "./single_column/default";
import setLocale from "../../utils/setLocale";

interface BandLayoutProps {
	children: (band: UseQueryResult<Prisma.BandGetPayload<{ include: { musics: { include: { composers: true, lyrists: true } }, artists: true } }> | null>) => React.ReactNode;
}

const BandLayout: React.FC<BandLayoutProps> = ({ children }) => {
	const router = useRouter()
	const bandQuery = trpc.useQuery(["band.show", { id: router.query.id as string }]);
	const { data: band } = bandQuery
	const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: any) => { router.push(newValue); }
	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Typography variant="h5">
					{band && setLocale(band.name, router)}
				</Typography>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={router.asPath} onChange={handleChange}>
						<Tab label="Info" value={"/bands/" + router.query.id} />
						<Tab label="Settings" value={"/bands/" + router.query.id + "/settings"} />
					</Tabs>
				</Box>
			</>
		}>
			{children(bandQuery)}
		</DefaultSingleColumnLayout>
	)
}

export default BandLayout;