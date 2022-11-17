import React, { useEffect, useState } from "react"
import { useSnackbar } from "notistack";
import { AutocompleteChangeDetails, AutocompleteChangeReason } from "@mui/material/Autocomplete";
import { Prisma } from "@prisma/client";
import { Resource, PrismaModelNameLowercase } from "../../../../types/common";
import { useRouter } from "next/router";
import { AutocompleteValue } from "@mui/material/useAutocomplete";
import { trpc } from "../../../../utils/trpc";
import SearchAutocomplete, { SearchAutocompleteProps } from "../search"

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
	UpdateInput
> =
	Omit<SearchAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, "onChange" | "resource"> & {
		resource: {
			retrieval: PrismaModelNameLowercase
			update: PrismaModelNameLowercase
		}
		onChange: {
			onClear?: () => UpdateInput
			onSelect?: HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo, UpdateInput>
			onRemove?: HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo, UpdateInput>
		}
	}

function DefaultUpdateAutocomplete<
	T extends Resource = Resource,
	Multiple extends boolean | undefined = undefined,
	DisableClearable extends boolean | undefined = undefined,
	FreeSolo extends boolean | undefined = undefined,
	UpdateInput = Prisma.MusicUpdateInput | Prisma.ArtistUpdateInput | Prisma.BandUpdateInput
>(
	{ defaultValue, resource, loading, label, getOptionLabel, onChange: { onClear, onSelect, onRemove }, ...props }:
		UpdateAutocompleteProps<T, Multiple, DisableClearable, FreeSolo, UpdateInput>
) {
	const [value, setValue] = useState<AutocompleteValue<T, Multiple, DisableClearable, FreeSolo> | undefined>(defaultValue)
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()
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
	const disabled = loading || update.isLoading
	return (
		<SearchAutocomplete<T, Multiple, DisableClearable, FreeSolo>
			{...props}
			value={value}
			resource={resource.retrieval}
			getOptionLabel={getOptionLabel}
			label={label}
			disabled={disabled}
			onChange={handleChangeAutocomplete<T, Multiple, DisableClearable, FreeSolo>({
				onClear: () => {
					if (onClear)
						handleUpdateInclude(onClear(), () => setValue(undefined));
				},
				onSelect: (_e, _v, _r, details) => {
					if (onSelect) {
						handleUpdateInclude(
							onSelect(_e, _v, _r, details),
							() => setValue(prev => {
								const { option } = details;
								if (Array.isArray(prev))
									return [...prev, option] as AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
								else
									return option as AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
							})
						);
					}
				},
				onRemove: (_e, _v, _r, details) => {
					if (onRemove) {
						handleUpdateInclude(
							onRemove(_e, _v, _r, details),
							() => setValue(prev => {
								const { option } = details;
								if (Array.isArray(prev)) {
									return prev.filter(prev => {
										if (typeof prev === "string")
											return;
										return prev.id !== option.id;
									}) as AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
								}
								else
									return option as AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>;
							})
						);
					}
				}
			})} />
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