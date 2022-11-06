import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { Locales } from '@prisma/client';
import { AutocompleteElement, FormContainer, useForm } from 'react-hook-form-mui';

const LocaleAutocomplete = () => {
	const formContext = useForm<{ locale: keyof Locales }>()
	const router = useRouter()
	const handleChange = (lang: keyof Locales | undefined) => lang && router.push(router.asPath, undefined, { locale: lang })
	useEffect(() => {
		if (router.locale) formContext.reset({ locale: router.locale as keyof Locales })
	}, [formContext, router.locale])
	return (
		<FormContainer
			defaultValues={{ locale: router.locale as keyof Locales }}
			formContext={formContext}
		>
			<AutocompleteElement
				name="locale"
				label="Locale"
				options={router.locales as (keyof Locales)[]}
				autocompleteProps={{
					fullWidth: true,
					disableClearable: true,
					onChange: (_e, _value, _reason, details) => handleChange(details?.option),
					isOptionEqualToValue: (option, value) => option === value
				}}
				textFieldProps={{ margin: "dense" }}
			/>
		</FormContainer>
	)
}
export default LocaleAutocomplete;