import React, { useEffect, useState } from "react";
import Autocomplete, {
  type AutocompleteProps,
} from "@mui/material/Autocomplete";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { useRouter } from "next/router";

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
  ...props
}: SearchAutocompleteProps<T, Multiple, DisableClearable, FreeSolo>) {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  useEffect(() => {
    setInputValue(router.query.q as string);
  }, [router.query.q]);
  return (
    <Autocomplete
      {...props}
      inputValue={inputValue}
      onInputChange={(_event, newInputValue, reason) => {
        console.log(reason);
        setInputValue(newInputValue);
        props.onInputChange &&
          props.onInputChange(_event, newInputValue, reason);
      }}
      renderInput={(params) => (
        <TextField {...params} {...textFieldProps} variant="outlined" />
      )}
      fullWidth
    />
  );
}
export default SearchAutocomplete;
