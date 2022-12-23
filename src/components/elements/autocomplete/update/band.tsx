import React from "react";
import DefaultUpdateAutocomplete from "./default";
import type { Band } from "@prisma/client";
import type {
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
