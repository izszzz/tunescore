import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UseQueryResult } from "react-query";
import { Prisma } from "@prisma/client";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import DefaultTabs from "../elements/tabs/default";
import ToggleLoadingButton from "../elements/button/toggleLoading"
import { trpc } from "../../utils/trpc";
import DefaultSingleColumnLayout from "./single_column/default";
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";

interface UserLayoutProps {
	children: (user: UseQueryResult<Prisma.UserGetPayload<{
		include: {
			musics: true,
			followedBy: true,
			following: true,
			_count: { select: { followedBy: true, following: true } }
		}
	}> & { isFollowed: boolean } | null>) => React.ReactNode;
}

const ArtistLayout: React.FC<UserLayoutProps> = ({ children }) => {
	const [following, setFollowing] = useState(0)
	const [followers, setFollowers] = useState(0)
	const router = useRouter()
	const session = useSession()
	const userQuery = trpc.useQuery(["user.show", { id: router.query.id as string, currentUserId: session.data?.user?.id as string }]);
	const update = trpc.useMutation("user.update");
	const { data: user } = userQuery
	function handleUpdateInclude(params: Prisma.UserUpdateInput, onSuccess?: () => void) {
		update.mutate({ id: router.query.id as string, ...params }, {
			onSuccess: () => { onSuccess && onSuccess() }
		})
	}
	const handleChange = (value: boolean, setValue: React.Dispatch<React.SetStateAction<boolean>>) => {
		if (value) handleUpdateInclude({ followedBy: { disconnect: { id: session.data?.user?.id as string } } }, () => {
			setValue(false)
			setFollowers(p => --p)
		})
		else handleUpdateInclude({ followedBy: { connect: { id: session.data?.user?.id as string } } }, () => {
			setValue(true)
			setFollowers(p => ++p)
		})
	}
	useEffect(() => {
		if (!user?._count) return
		setFollowing(user._count.following)
		setFollowers(user._count.followedBy)
	}, [user])
	return (
		<DefaultSingleColumnLayout subHeader={
			<>
				<Box display="flex" justifyContent="center">
					<Box>
						<Avatar sx={{ height: '70px', width: '70px' }} src={user?.image || ""} />
						<Typography variant="h5">
							{user?.name}
						</Typography>
					</Box>
				</Box>
				<ToggleLoadingButton
					defaultValue={user?.isFollowed || false}
					loading={update.isLoading}
					label={v => v ? "unfollow" : "follow"}
					variant={v => v ? "outlined" : "contained"}
					onClick={handleChange} />
				<Button onClick={() => router.push("/users/" + router.query.id + "/following")}>following:{following}</Button>
				<Button onClick={() => router.push("/users/" + router.query.id + "/followers")}>followers:{followers}</Button>
				<DefaultTabs tabs={[
					{ label: "Info", href: "/users/" + router.query.id },
					{ label: "Settings", href: "/users/" + router.query.id + "/settings", disabled: router.query.id !== session.data?.user?.id }
				]} />
			</>
		}>
			{children(userQuery)}
		</DefaultSingleColumnLayout>
	)
}

export default ArtistLayout;