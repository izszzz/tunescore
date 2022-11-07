import React from "react";
import { useRouter } from "next/router";
import { UseQueryResult } from "react-query";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import { trpc } from "../../utils/trpc";
import DefaultSingleColumnLayout from "./single_column/default";
import setLocale from "../../utils/setLocale";
import DefaultTabs from "../elements/tabs/default";

interface BandLayoutProps {
	children: (band: UseQueryResult<Prisma.BandGetPayload<{ include: { musics: { include: { composers: true, lyrists: true } }, artists: true } }> | null>) => React.ReactNode;
}

const BandLayout: React.FC<BandLayoutProps> = ({ children }) => {
	const router = useRouter()
	const bandQuery = trpc.useQuery(["band.show", { id: router.query.id as string }]);
	const { data: band } = bandQuery
	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Typography variant="h5">
					{band && setLocale(band.name, router)}
				</Typography>
				<DefaultTabs tabs={[
					{ label: "Info", href: { pathname: "/bands/[id]", query: { id: router.query.id as string } } },
					{ label: "Settings", href: { pathname: "/bands/[id]/settings", query: { id: router.query.id as string } } },
				]} />
			</>
		}>
			{children(bandQuery)}
		</DefaultSingleColumnLayout>
	)
}

export default BandLayout;