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
						following
						<UserList users={data?.following || []} />
					</>
				)
			}
		}
		</UserLayout>
	)
}

export default UserFollowers