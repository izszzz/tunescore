import React, { useState } from "react"
import { useSnackbar } from "notistack";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Band, Prisma } from "@prisma/client";
import { handleChangeAutocomplete } from "../../../utils/common";
import { trpc } from "../../../utils/trpc";
import { useRouter } from "next/router";

function UpdateAutocomplete<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined>({ defaultValue, ...props }: AutocompleteProps<T, Multiple extends boolean | undefined, DisableClearable extends boolean | undefined, FreeSolo extends boolean | undefined,>) {
	const [value, setValue] = useState<T | undefined | null>(defaultValue)
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const searchBand = trpc.useMutation("band.search", { onError: () => { enqueueSnackbar("search band error") } });
	const update = trpc.useMutation("band.update", {
		onSuccess: () => { enqueueSnackbar("update success") },
		onError: () => { enqueueSnackbar("update error") }
	});
	function handleUpdateInclude(params: Prisma.MusicUpdateInput, onSuccess?: () => void) {
		update.mutate({ id: router.query.id as string, ...params }, {
			onSuccess: () => { onSuccess && onSuccess() }
		})
	}
	const disabled = isLoading || update.isLoading
	return (
		<Autocomplete
			value={band}
			options={searchBand.data || []}
			loading={searchBand.isLoading}
			disabled={disabled}
			onChange={
				handleChangeAutocomplete<Band, false, false, false>({
					onClear: () => handleUpdateInclude({ band: { disconnect: true } }),
					onSelect: (_e, _v, _r, details) => handleUpdateInclude({ band: { connect: { id: details.option.id } } })
				})
			}
			getOptionLabel={option => setLocale(option.name, router) || ""}
			renderInput={(params) =>
				<TextField
					{...params}
					variant="outlined"
					label="Band"
					margin="dense"
					onChange={handleSearchBand}
				/>
			}
		/>
	)
}