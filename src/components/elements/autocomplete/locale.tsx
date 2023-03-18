import React, { useEffect } from "react";
import {
  AutocompleteElement,
  FormContainer,
  useForm,
} from "react-hook-form-mui";
import type {
  AutocompleteElementProps,
  FieldValues,
} from "react-hook-form-mui";

import type { Locale } from "@prisma/client";
import { useRouter } from "next/router";
const LocaleAutocomplete = (
  props: Omit<
    AutocompleteElementProps<
      FieldValues,
      keyof Locale,
      false,
      true
    >["autocompleteProps"],
    "fullWidth" | "disableClearable"
  >
) => {
  const formContext = useForm<{ locale: keyof Locale }>();
  const { locale, locales, ...router } = useRouter();
  const handleChange = (lang: keyof Locale | undefined) =>
    lang && router.push({ query: router.query }, undefined, { locale: lang });
  useEffect(() => {
    if (locale) formContext.reset({ locale: locale as keyof Locale });
  }, [formContext, locale]);
  return (
    <FormContainer
      defaultValues={{ locale: locale as keyof Locale }}
      formContext={formContext}
    >
      <AutocompleteElement
        autocompleteProps={{
          ...props,
          fullWidth: true,
          disableClearable: true,
          size: "small",
          onChange: (_e, _value, _reason, details) =>
            handleChange(details?.option),
          isOptionEqualToValue: (option, value) => option === value,
        }}
        label="Locale"
        name="locale"
        options={locales as (keyof Locale)[]}
      />
    </FormContainer>
  );
};
export default LocaleAutocomplete;
