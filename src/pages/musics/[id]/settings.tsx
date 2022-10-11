import React, { ChangeEvent, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react";
import Button from "@mui/material/Button";
import { FormContainer, TextFieldElement, AutocompleteElement, useForm } from "react-hook-form-mui"
import MusicLayout from "../../../components/layouts/music";
import { trpc } from "../../../utils/trpc";
import { Band, Music } from "@prisma/client";
import { useSnackbar } from "notistack";

const EditMusic: NextPage = () => {
	const router = useRouter()
	const formContext = useForm<Music & { band: Band }>()
	const { enqueueSnackbar } = useSnackbar()
	const { data: music } = trpc.useQuery(["music.show", { id: router.query.id as string }]);
	const update = trpc.useMutation("music.update", {
		onSuccess: () => { enqueueSnackbar("update success") },
		onError: () => { enqueueSnackbar("update error") }
	});
	const destroy = trpc.useMutation("music.destroy", {
		onSuccess: () => router.push("/musics"),
		onError: () => { enqueueSnackbar("update error") }
	});
	const searchBand = trpc.useMutation("band.search", {
		onSuccess: () => { },
		onError: () => { enqueueSnackbar("update error") }
	});
	const handleSubmit = (data: Music & { band: Band }) => update.mutate(data)
	const handleDestroy = () => music && destroy.mutate(music)
	const handleSearchBand = (e: ChangeEvent<HTMLInputElement>) => searchBand.mutate({ title: e.currentTarget.value });
	useEffect(() => {
		if (music) formContext.reset(music)
	}, [music])
	console.log(formContext.getValues())
	return (
		<MusicLayout>
			{() =>
				<>
					<FormContainer
						formContext={formContext}
						onSuccess={handleSubmit}
					>
						<TextFieldElement name="title" label="Title" required />
						<AutocompleteElement name="band" label="Band" options={searchBand.data || []} loading={searchBand.isLoading} autocompleteProps={{ onChange: (_e, value) => value.id, getOptionLabel: (option: Band) => option.name }} textFieldProps={{ onChange: handleSearchBand }} />
						<Button type="submit" variant="outlined" color="primary">Update</Button>
					</FormContainer>
					<br /><Button type="button" variant="contained" color="error" onClick={handleDestroy}>Delete Account</Button>
				</>
			}
		</MusicLayout>
	)
}
export default EditMusic;