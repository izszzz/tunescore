import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Locales } from "@prisma/client";
import {
  AutocompleteElement,
  AutocompleteElementProps,
  FieldValues,
  FormContainer,
  useForm,
} from "react-hook-form-mui";
const LocaleAutocomplete = (
  props: Omit<
    AutocompleteElementProps<
      FieldValues,
      keyof Locales,
      false,
      true
    >["autocompleteProps"],
    "fullWidth" | "disableClearable"
  >
) => {
  const formContext = useForm<{ locale: keyof Locales }>();
  const { locale, locales, ...router } = useRouter();
  const handleChange = (lang: keyof Locales | undefined) =>
    lang && router.push({ query: router.query }, undefined, { locale: lang });
  useEffect(() => {
    if (locale) formContext.reset({ locale: locale as keyof Locales });
  }, [formContext, locale]);
  return (
    <FormContainer
      defaultValues={{ locale: locale as keyof Locales }}
      formContext={formContext}
    >
      <AutocompleteElement
        name="locale"
        label="Locale"
        options={locales as (keyof Locales)[]}
        autocompleteProps={{
          ...props,
          fullWidth: true,
          disableClearable: true,
          onChange: (_e, _value, _reason, details) =>
            handleChange(details?.option),
          isOptionEqualToValue: (option, value) => option === value,
        }}
      />
    </FormContainer>
  );
};
export default LocaleAutocomplete;
