import { Band } from "@prisma/client";
import React from "react";
import DefaultUpdateAutocomplete, {
  DefaultUpdateAutocompleteProps,
} from "./default";

type BandUpdateAutocomplete = DefaultUpdateAutocompleteProps<
  Band,
  false,
  false,
  false
>;
function BandUpdateAutocomplete({
  textFieldProps,
  defaultValue,
  ...props
}: BandUpdateAutocomplete) {
  return (
    <DefaultUpdateAutocomplete<Band, false, false, false>
      {...props}
      defaultValue={defaultValue}
      textFieldProps={{
        ...textFieldProps,
        label: "band",
        margin: "dense",
      }}
    />
  );
}
export default BandUpdateAutocomplete;
