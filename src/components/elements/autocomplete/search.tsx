import React from "react";

import Autocomplete, {
  type AutocompleteProps,
} from "@mui/material/Autocomplete";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { useDebouncedCallback } from "use-debounce";

import { debounce } from "../../../consts";

export type SearchAutocompleteProps<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> = Omit<
  AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
  "renderInput"
> & {
  textFieldProps?: TextFieldProps;
};
function SearchAutocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>({
  textFieldProps,
  loading,
  onInputChange,
  ...props
}: SearchAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  const handleInputChange: typeof onInputChange = (e, value, reason) =>
      onInputChange?.(e, value, reason),
    debounced = useDebouncedCallback(handleInputChange, debounce);
  return (
    <Autocomplete
      {...props}
      fullWidth
      loading={loading || debounced.isPending()}
      onInputChange={debounced}
      renderInput={(params) => (
        <TextField {...params} {...textFieldProps} variant="outlined" />
      )}
    />
  );
}
export default SearchAutocomplete;
