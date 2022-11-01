import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField';
import { Locales } from '@prisma/client';

const LocaleAutocomplete = () => {
	const router = useRouter()
	const onChangeLanguage = (lang: keyof Locales | undefined) => lang && router.push(router.asPath, undefined, { locale: lang })
	return (
		<Autocomplete<keyof Locales, false, true>
			disablePortal
			defaultValue={router.locale as keyof Locales}
			options={router.locales as (keyof Locales)[]}
			renderInput={(params) => <TextField {...params} margin="dense" label="Locale" />}
			fullWidth
			disableClearable
			onChange={(_e, _value, _reason, details) => onChangeLanguage(details?.option)}
		/>
	)
}
export default LocaleAutocomplete;