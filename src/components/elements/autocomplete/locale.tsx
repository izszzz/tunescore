import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  AutocompleteElement,
  FormContainer,
  useForm,
} from "react-hook-form-mui";
import type { Locale } from "@prisma/client";
import type {
  AutocompleteElementProps,
  FieldValues,
} from "react-hook-form-mui";
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
        name="locale"
        label="Locale"
        options={locales as (keyof Locale)[]}
        autocompleteProps={{
          ...props,
          fullWidth: true,
          disableClearable: true,
          size: "small",
          onChange: (_e, _value, _reason, details) =>
            handleChange(details?.option),
          isOptionEqualToValue: (option, value) => option === value,
        }}
      />
    </FormContainer>
  );
};
export default LocaleAutocomplete;
