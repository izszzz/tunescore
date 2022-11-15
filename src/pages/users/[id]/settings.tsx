import { useEffect } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { User } from "next-auth";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, useForm } from "react-hook-form-mui"
import { trpc } from "../../../utils/trpc";
import UserLayout from "../../../components/layouts/show/user";
import { Prisma, PrismaClient } from "@prisma/client";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
interface UserProps {
	data: Prisma.UserGetPayload<{ include: { _count: { select: { followedBy: true, following: true } } } }>
	followed: boolean
}
const SettingsUser: NextPage<UserProps> = ({ data, followed }) => {
	const router = useRouter()
	const { data: session } = useSession()
	const formContext = useForm<User>()
	const update = trpc.useMutation("user.update");
	const destroy = trpc.useMutation("user.destroy", { onSuccess: () => router.push("/"), onError: error => console.log(error) });
	const handleSubmit = (data: User) => update.mutate(data)
	const handleDestroy = () => session?.user && destroy.mutate(session.user)

	useEffect(() => {
		formContext.reset(session?.user)
	}, [formContext, session])
	return (
		<UserLayout data={data} followed={followed} activeTab="settings" >
			<FormContainer
				formContext={formContext}
				onSuccess={handleSubmit}
			>
				<TextFieldElement name="name" label="Name" required /><br />
				<Button type="submit" >submit</Button>
				<br /><Button type="button" onClick={handleDestroy}>Delete Account</Button>
			</FormContainer>
		</UserLayout >
	)
}

export const getServerSideProps: GetServerSideProps<UserProps> = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.user.findUnique({ where: { id: ctx.query.id as string }, include: { _count: { select: { followedBy: true, following: true } } } })
	if (!data) return { notFound: true };
	const session = await getServerAuthSession(ctx)
	const followed = await prisma.user.findFirst({
		where: {
			id: ctx.query.id as string,
		},
		include: {
			following: { where: { id: session?.user?.id } },
		},
	})
	return {
		props: { data, followed: !!followed?.following.length },
	};
};
export default SettingsUser;
