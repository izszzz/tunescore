import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import { trpc } from "../../../utils/trpc";
import { DefaultTabsProps } from "../../elements/tabs/default";
import setLocale from "../../../utils/setLocale";
import ShowLayout from "./default";
import { Prisma } from "@prisma/client";
import Box from "@mui/material/Box";
import BookmarkToggleButton from "../../elements/button/toggle/bookmark";
interface ArtistLayoutProps {
	data: Prisma.ArtistGetPayload<null>
	bookmarked: boolean
	activeTab: "info" | "settings"
	children: React.ReactNode;
}
const ArtistLayout: React.FC<ArtistLayoutProps> = ({ data, bookmarked, activeTab, children }) => {
	const router = useRouter()
	const bookmarkCreate = trpc.useMutation(["artist.bookmark.create"]);
	const bookmarkDestroy = trpc.useMutation(["artist.bookmark.destroy"]);
	const tabs: DefaultTabsProps["tabs"] = useMemo(() => (
		[
			{ label: "info", href: { pathname: "/artists/[id]", query: { id: router.query.id as string } } },
			{ label: "settings", href: { pathname: "/artists/[id]/settings", query: { id: router.query.id as string } } },
		]
	), [router.query.id])
	const handleUpdate = (value: boolean, setValue: React.Dispatch<React.SetStateAction<boolean>>) => {
		if (value) bookmarkDestroy.mutate({ id: router.query.id as string }, { onSuccess: () => setValue(false) })
		else bookmarkCreate.mutate({ id: router.query.id as string }, { onSuccess: () => setValue(true) })
	}
	return (
		<ShowLayout
			activeTab={activeTab}
			tabs={tabs}
			title={
				<Box display="flex" alignItems="center">
					<Typography variant="h5">
						{setLocale(data.name, router)}
					</Typography>
					<BookmarkToggleButton defaultValue={bookmarked} loading={bookmarkCreate.isLoading || bookmarkDestroy.isLoading} onClick={handleUpdate} />
				</Box>
			}>
			{children}
		</ShowLayout>
	)
}
export default ArtistLayout;