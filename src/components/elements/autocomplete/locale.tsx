import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField';

const LocaleAutocomplete = () => {
	const router = useRouter()
	return (
		<Autocomplete
			disablePortal
			defaultValue={router.locale}
			options={Array.isArray(router.locales) ? router.locales : []}
			renderInput={(params) => <TextField {...params} margin="dense" label="Locale" />}
			fullWidth
		/>
	)
}
export default LocaleAutocomplete;