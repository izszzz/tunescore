import React from "react"
import { AutocompleteChangeDetails, AutocompleteChangeReason } from "@mui/material/Autocomplete";
import { AutocompleteValue } from "@mui/material/useAutocomplete";
import CustomAutocomplete, { CustomAutocompleteProps } from "../search"

export type HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo> = (
	_e: React.SyntheticEvent,
	_value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
	reason: AutocompleteChangeReason,
	details?: AutocompleteChangeDetails<T>
) => void

export type DefaultUpdateAutocompleteProps<
	T,
	Multiple extends boolean | undefined,
	DisableClearable extends boolean | undefined,
	FreeSolo extends boolean | undefined,
> =
	Omit<CustomAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, "onChange"> & {
		onChange: {
			onClear?: () => void
			onSelect?: HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo>
			onRemove?: HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo>
		}
	}

function DefaultUpdateAutocomplete<
	T,
	Multiple extends boolean | undefined = undefined,
	DisableClearable extends boolean | undefined = undefined,
	FreeSolo extends boolean | undefined = undefined,
>(
	{ onChange: { onClear, onSelect, onRemove }, ...props }:
		DefaultUpdateAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>
) {
	return (
		<CustomAutocomplete<T, Multiple, DisableClearable, FreeSolo>
			{...props}
			onChange={handleChangeAutocomplete<T, Multiple, DisableClearable, FreeSolo>({
				onClear: () => onClear && onClear(),
				onSelect: (_e, _v, _r, details) => onSelect && onSelect(_e, _v, _r, details),
				onRemove: (_e, _v, _r, details) => onRemove && onRemove(_e, _v, _r, details)
			})}
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