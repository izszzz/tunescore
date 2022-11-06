import React from "react";
import type { NextPage } from "next";
import UserLayout from "../../../components/layouts/user";

const UserFollowers: NextPage = () => {
	return (
		<UserLayout>{
			({ data }) => {
				return (
					<>
						followers
						{data?.followedBy?.map(followed => <p key={followed.id}>{followed.name}</p>)}
					</>
				)
			}
		}
		</UserLayout>
	)
}

export default UserFollowers