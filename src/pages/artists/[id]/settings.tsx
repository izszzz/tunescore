import React from "react";
import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from 'next/router'
import { FormContainer, TextFieldElement } from "react-hook-form-mui"
import { Artist, Prisma, PrismaClient } from "@prisma/client";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from '@mui/icons-material/Send';
import { trpc } from "../../../utils/trpc";
import ArtistLayout, { ArtistLayoutProps } from "../../../components/layouts/show/artist";
import BandUpdateAutocomplete from "../../../components/elements/autocomplete/update/band";
import { getServerAuthSession } from "../../../server/common/get-server-auth-session";
import { getProviders } from "next-auth/react";
interface ArtistProps extends Pick<ArtistLayoutProps, "bookmarked" | "providers"> {
	data: Prisma.ArtistGetPayload<{
		include: {
			bands: true,
		}
	}>
}
const EditArtist: NextPage<ArtistProps> = ({ providers, data, bookmarked }) => {
	const router = useRouter()
	const update = trpc.useMutation("artist.update");
	const destroy = trpc.useMutation("artist.destroy");
	const handleSubmit = (data: Artist) => update.mutate(data)
	const handleDestroy = () => {
		destroy.mutate(data, {
			onSuccess: () =>
				router.push("/artists")
		})
	}
	return (
		<ArtistLayout providers={providers} data={data} bookmarked={bookmarked} activeTab="settings">
			<FormContainer
				defaultValues={data}
				onSuccess={handleSubmit}
			>
				<Grid container spacing={1} my={1}>
					<Grid item xs={10} >
						<TextFieldElement name={"name." + router.locale} label="Name" disabled={update.isLoading || destroy.isLoading} required fullWidth />
					</Grid>
					<Grid item xs={2} alignItems="stretch" style={{ display: "flex" }}>
						<LoadingButton
							type="submit"
							variant="outlined"
							disabled={update.isLoading || destroy.isLoading}
							loading={update.isLoading}
							endIcon={<SendIcon />}
							fullWidth
						>
							Update
						</LoadingButton>
					</Grid>
				</Grid>
			</FormContainer>
			<BandUpdateAutocomplete defaultValue={data.bands} resource="artist" />
			<br /><Button type="button" onClick={handleDestroy}>Delete Artist</Button>
		</ArtistLayout>
	)
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const prisma = new PrismaClient()
	const data = await prisma.artist.findUnique({ where: { id: ctx.query.id as string }, include: { musics: { include: { band: true, composers: true, lyrists: true } }, band: true, composedMusics: { include: { band: true, composers: true, lyrists: true } }, writtenMusics: { include: { band: true, composers: true, lyrists: true } } } })
	if (!data) return { notFound: true };
	const providers = await getProviders()
	const session = await getServerAuthSession(ctx)
	const bookmarked = await prisma.artist.findFirst({
		where: {
			id: ctx.query.id as string,
		},
		include: {
			bookmarks: { where: { id: session?.user?.id } },
		},
	})
	return {
		props: { data, bookmarked: !!bookmarked?.bookmarks.length, providers },
	};
};
export default EditArtist;