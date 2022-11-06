import React from "react";
import type { NextPage } from "next";
import UserLayout from "../../../components/layouts/user";

const UserFollowers: NextPage = () => {
	return (
		<UserLayout>{
			({ data }) => {
				return (
					<>
						following
						{data?.following?.map(follow => <p key={follow.id}>{follow.name}</p>)}
					</>
				)
			}
		}
		</UserLayout>
	)
}

export default UserFollowers