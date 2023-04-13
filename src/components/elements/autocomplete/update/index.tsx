import React from "react";

import type {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@mui/material/Autocomplete";
import type { AutocompleteValue } from "@mui/material/useAutocomplete";

import SearchAutocomplete from "../search";
import type { SearchAutocompleteProps } from "../search";

type HandleChangeReasonFunction<T, Multiple, DisableClearable, FreeSolo> = (
  _e: React.SyntheticEvent,
  _value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
  reason: AutocompleteChangeReason,
  details?: AutocompleteChangeDetails<T>
) => void;

export type UpdateAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = Omit<
  SearchAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
  "onChange"
> & {
  onChange: {
    onClear?: () => void;
    onSelect?: HandleChangeReasonFunction<
      T,
      Multiple,
      DisableClearable,
      FreeSolo
    >;
    onRemove?: HandleChangeReasonFunction<
      T,
      Multiple,
      DisableClearable,
      FreeSolo
    >;
  };
};

function UpdateAutocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>({
  onChange: { onClear, onSelect, onRemove },
  ...props
}: UpdateAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return (
    <SearchAutocomplete<T, Multiple, DisableClearable, FreeSolo>
      {...props}
      onChange={handleChangeAutocomplete<
        T,
        Multiple,
        DisableClearable,
        FreeSolo
      >({
        onClear,
        onSelect: (_e, _v, _r, details) =>
          onSelect && onSelect(_e, _v, _r, details),
        onRemove: (_e, _v, _r, details) =>
          onRemove && onRemove(_e, _v, _r, details),
      })}
    />
  );
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
  ) => void;
  onSelect?: (
    _e: React.SyntheticEvent,
    _value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details: AutocompleteChangeDetails<T>
  ) => void;
  onRemove?: (
    _e: React.SyntheticEvent,
    _value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details: AutocompleteChangeDetails<T>
  ) => void;
}) {
  return (
    _e: React.SyntheticEvent,
    _value: AutocompleteValue<T, Multiple, DisableClearable, FreeSolo>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>
  ) => {
    if (reason === "clear") onClear && onClear(_e, _value, reason);
    if (!details) return console.log("details not found");
    if (reason === "selectOption")
      onSelect && onSelect(_e, _value, reason, details);
    if (reason === "removeOption")
      onRemove && onRemove(_e, _value, reason, details);
  };
}

export default UpdateAutocomplete;
