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

interface UserLayoutProps {
	children: (user: UseQueryResult<Prisma.UserGetPayload<{
		include: {
			musics: true,
		}
	}> | null>) => React.ReactNode;
}

const ArtistLayout: React.FC<UserLayoutProps> = ({ children }) => {
	const router = useRouter()
	const userQuery = trpc.useQuery(["user.show", { id: router.query.id as string }]);
	const { data: user } = userQuery
	const handleChange = (_event: React.SyntheticEvent<Element, Event>, newValue: any) => { router.push(newValue); }
	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Typography variant="h5">
					{user?.name}
				</Typography>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={router.asPath} onChange={handleChange}>
						<Tab label="Info" value={"/artists/" + router.query.id} />
						<Tab label="Settings" value={"/artists/" + router.query.id + "/settings"} />
					</Tabs>
				</Box>
			</>
		}>
			{children(userQuery)}
		</DefaultSingleColumnLayout>
	)
}

export default ArtistLayout;