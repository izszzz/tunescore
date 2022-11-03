import React, { ChangeEvent, useEffect, useState } from "react"
import { useSnackbar } from "notistack";
import Autocomplete, { AutocompleteChangeDetails, AutocompleteChangeReason, AutocompleteProps } from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Locales, Prisma } from "@prisma/client";
import { useRouter } from "next/router";
import { AutocompleteFreeSoloValueMapping, AutocompleteValue } from "@mui/material/useAutocomplete";
import setLocale from "../../../../utils/setLocale";
import { trpc } from "../../../../utils/trpc";

type HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo, UpdateInput> = (
	_e: React.SyntheticEvent,
	_value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
	reason: AutocompleteChangeReason,
	details?: AutocompleteChangeDetails<T>
) => UpdateInput

type UpdateAutocompleteProps<
	T,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined,
	UpdateInput extends Prisma.MusicUpdateInput | Prisma.ArtistUpdateInput | Prisma.BandUpdateInput
> =
	Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, "getOptionLabel" | "onChange" | "renderInput" | "options" | "resource"> & {
		resource: {
			retrieval: "artist" | "music" | "band"
			update: "artist" | "music" | "band"
		}
		getOptionLabel: (option: T | AutocompleteFreeSoloValueMapping<FreeSolo>) => Locales;
		onChange: {
			onClear?: () => UpdateInput
			onSelect?: HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo, UpdateInput>
			onRemove?: HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo, UpdateInput>
		}
		label: string
	}

function DefaultUpdateAutocomplete<
	T,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined,
	UpdateInput extends Prisma.MusicUpdateInput | Prisma.ArtistUpdateInput | Prisma.BandUpdateInput
>(
	{ defaultValue, resource, loading, label, getOptionLabel, onChange: { onClear, onSelect, onRemove }, ...props }:
		UpdateAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, UpdateInput>
) {
	const [value, setValue] = useState<AutocompleteValue<T, Multiple, DisableClearable, FreeSolo> | undefined>(defaultValue)
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
	const search = trpc.useMutation(`${resource.retrieval}.search`, { onError: () => { enqueueSnackbar(`search ${resource.retrieval} error`) } });
	const update = trpc.useMutation(`${resource.update}.update`, {
		onSuccess: () => { enqueueSnackbar("update success") },
		onError: () => { enqueueSnackbar("update error") }
	});
	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])
	function handleUpdateInclude(params: UpdateInput, onSuccess?: () => void) {
		update.mutate({ id: router.query.id as string, ...params }, { onSuccess: () => { onSuccess && onSuccess() } })
	}
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => search.mutate({ name: e.currentTarget.value, locale: router.locale as string });
	const disabled = loading || update.isLoading
	return (
		<Autocomplete<T, Multiple, DisableClearable, FreeSolo>
			{...props}
			value={value}
			options={search.data || []}
			loading={search.isLoading}
			disabled={disabled}
			onChange={
				handleChangeAutocomplete<T, Multiple, DisableClearable, FreeSolo>({
					onClear: () => {
						if (onClear) handleUpdateInclude(onClear(), () => setValue(undefined))
					},
					onSelect: (_e, _v, _r, details) => {
						if (onSelect) {
							handleUpdateInclude(
								onSelect(_e, _v, _r, details),
								() => setValue(prev => {
									if (Array.isArray(prev)) return [...prev, details.option]
									else return details.option
								})
							)
						}
					},
					onRemove: (_e, _v, _r, details) => {
						if (onRemove) {
							handleUpdateInclude(
								onRemove(_e, _v, _r, details),
								() => setValue(prev => {
									if (Array.isArray(prev)) {
										return prev.filter(prev => {
											if (typeof prev === "string") return
											return prev.id !== details.option.id
										})
									}
									else return details.option
								})
							)
						}
					}
				})
			}
			getOptionLabel={option => getOptionLabel && setLocale(getOptionLabel(option), router) || ""}
			renderInput={(params) =>
				<TextField
					{...params}
					label={label}
					variant="outlined"
					margin="dense"
					onChange={handleSearch}
				/>
			}
		/>
	)
}
export function handleChangeAutocomplete<
	T,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined
>({
	onClear,
	onSelect,
	onRemove,
}: {
	onClear?: (
		_e: React.SyntheticEvent,
		_value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
		reason: AutocompleteChangeReason,
		details?: AutocompleteChangeDetails<T>
	) => void
	onSelect?: (
		_e: React.SyntheticEvent,
		_value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
		reason: AutocompleteChangeReason,
		details: AutocompleteChangeDetails<T>
	) => void
	onRemove?: (
		_e: React.SyntheticEvent,
		_value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
		reason: AutocompleteChangeReason,
		details: AutocompleteChangeDetails<T>
	) => void
}) {
	return (
		_e: React.SyntheticEvent,
		_value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
		reason: AutocompleteChangeReason,
		details?: AutocompleteChangeDetails<T>
	) => {
		if (reason === "clear") onClear && onClear(_e, _value, reason)
		if (!details) return console.log("details not found")
		if (reason === "selectOption")
			onSelect && onSelect(_e, _value, reason, details)
		if (reason === "removeOption")
			onRemove && onRemove(_e, _value, reason, details)
	}
}

export default DefaultUpdateAutocomplete