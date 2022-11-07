import React from "react";
import type { NextPage } from "next";
import UserLayout from "../../../components/layouts/user";
import UserList from "../../../components/elements/list/user";

const UserFollowers: NextPage = () => {
	return (
		<UserLayout>{
			({ data }) => {
				return (
					<>
						followers
						<UserList users={data?.followedBy || []} />
					</>
				)
			}
		}
		</UserLayout>
	)
}

export default UserFollowers