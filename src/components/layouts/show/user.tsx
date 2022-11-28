import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { DefaultTabsProps } from "../../elements/tabs/default";
import ToggleLoadingButton from "../../elements/button/toggle/loading"
import { trpc } from "../../../utils/trpc";
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import ShowLayout from "./default";

interface UserLayoutProps extends Pick<ShowLayoutProps, "children"> {
	data: Prisma.UserGetPayload<{ include: { _count: { select: { following: true, followedBy: true } } } }>
	followed: boolean
	activeTab: "info" | "settings" | "";
}

const UserLayout: React.FC<UserLayoutProps> = ({ data, followed, activeTab, children }) => {
	const [following, setFollowing] = useState(0)
	const [followers, setFollowers] = useState(0)
	const router = useRouter()
	const session = useSession()
	const update = trpc.useMutation("user.update");
	function handleUpdateInclude(params: Prisma.UserUpdateInput, onSuccess?: () => void) {
		update.mutate({ where: { id: router.query.id as string }, ...params }, {
			onSuccess: () => { onSuccess && onSuccess() }
		})
	}
	const handleChange = (value: boolean, setValue: React.Dispatch<React.SetStateAction<boolean>>) => {
		if (!session.data?.user?.id) return
		if (value) handleUpdateInclude({ followedBy: { disconnect: { id: session.data.user.id as string } } }, () => {
			setValue(false)
			setFollowers(p => --p)
		})
		else handleUpdateInclude({ followedBy: { connect: { id: session.data.user.id as string } } }, () => {
			setValue(true)
			setFollowers(p => ++p)
		})
	}
	useEffect(() => {
		setFollowing(data._count.following)
		setFollowers(data._count.followedBy)
	}, [data._count.followedBy, data._count.following])
	const tabs: DefaultTabsProps["tabs"] = useMemo(() => ([
		{ label: "info", href: { pathname: "/users/[id]", query: { id: router.query.id as string } } },
		{ label: "settings", href: { pathname: "/users/[id]/settings", query: { id: router.query.id as string } } },
	]), [router.query.id])
	return (
		<ShowLayout
			tabs={tabs}
			activeTab={activeTab}
			title={
				<>
					<Box display="flex" justifyContent="center">
						<Box>
							<Avatar sx={{ height: '70px', width: '70px' }} src={data.image || ""} />
							<Typography variant="h5">
								{data.name}
							</Typography>
						</Box>
					</Box>
					<ToggleLoadingButton
						defaultValue={followed}
						loading={update.isLoading}
						label={v => v ? "unfollow" : "follow"}
						variant={v => v ? "outlined" : "contained"}
						onClick={handleChange} />
					<Button onClick={() => router.push({ pathname: "/users/[id]/following", query: { id: router.query.id as string } })}>following:{following}</Button>
					<Button onClick={() => router.push({ pathname: "/users/[id]/followers", query: { id: router.query.id as string } })}>followers:{followers}</Button>
				</>
			}>
			{children}
		</ShowLayout>
	)
}

export default UserLayout;
