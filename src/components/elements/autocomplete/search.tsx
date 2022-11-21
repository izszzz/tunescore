import React, { ChangeEvent } from "react"
import { useSnackbar } from "notistack";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { trpc } from "../../../utils/trpc";
import { Locales } from "@prisma/client";
import { useRouter } from "next/router";
import setLocale from "../../../utils/setLocale";
import { AutocompleteFreeSoloValueMapping } from "@mui/material/useAutocomplete";
import { PrismaModelNameLowercase, Resource } from "../../../types/common";

export type SearchAutocompleteProps<
	T,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined,
> =
	Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, "getOptionLabel" | "renderInput" | "options" | "resource"> & {
		resource: PrismaModelNameLowercase
		textFieldProps: TextFieldProps
		getOptionLabel: (option: T | AutocompleteFreeSoloValueMapping<FreeSolo>) => Locales;
		onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
	}
function SearchAutocomplete<
	T extends Resource = Resource,
	Multiple extends boolean | undefined = undefined,
	DisableClearable extends boolean | undefined = undefined,
	FreeSolo extends boolean | undefined = undefined,
>({ resource, getOptionLabel, onKeyDown, textFieldProps, ...props }: SearchAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const search = trpc.useMutation(`${resource}.search`, { onError: () => { enqueueSnackbar(`search ${resource} error`) } });
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		let data
		if (resource === "music")
			data = { title: e.currentTarget.value }
		if (resource === "artist" || resource === "band")
			data = { name: e.currentTarget.value }
		search.mutate({ ...data, locale: router.locale as string });
	}
	return (
		<Autocomplete
			disablePortal
			{...props}
			options={search.data as T[] | undefined || []}
			loading={search.isLoading}
			getOptionLabel={option => getOptionLabel && setLocale(getOptionLabel(option), router) || ""}
			renderInput={(props) =>
				<TextField
					{...props}
					{...textFieldProps}
					// InputProps={{
					// 	autoFocus: true,
					// 	startAdornment: (
					// 		<InputAdornment position="start">
					// 			<SearchIcon />
					// 		</InputAdornment>
					// 	),
					// }}
					variant="outlined"
					onChange={handleSearch}
					onKeyDown={onKeyDown}
				/>
			}
			fullWidth
		/>
	)
}
export default SearchAutocomplete