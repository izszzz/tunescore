import Button from "@mui/material/Button";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UserLayout from "../../../components/layouts/user";

const User: NextPage = () => {
	const { data: session } = useSession()
	return (
		<UserLayout>{
			({ data }) => {
				return (
					<>
						<p>{data?.name}</p>
						{
							session?.user?.id == data?.id && (
								< Link href="/users/edit" passHref>
									<Button>Edit</Button>
								</Link>
							)
						}
					</>
				)
			}
		}
		</UserLayout>
	)
}

export default User;
