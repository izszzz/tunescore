import React from "react";
import Autocomplete, {
  type AutocompleteProps,
} from "@mui/material/Autocomplete";
import TextField, { type TextFieldProps } from "@mui/material/TextField";

export type CustomAutocompleteProps<
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
function CustomAutocomplete<
  T,
  Multiple extends boolean | undefined = undefined,
  DisableClearable extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined
>({
  textFieldProps,
  ...props
}: CustomAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  return (
    <Autocomplete
      {...props}
      renderInput={(params) => (
        <TextField {...params} {...textFieldProps} variant="outlined" />
      )}
      fullWidth
    />
  );
}
export default CustomAutocomplete;
