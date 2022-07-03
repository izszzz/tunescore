import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useToggle } from "react-use";
import Dialog from '@mui/material/Dialog';
import Autocomplete from '@mui/material/Autocomplete';
import { Button, DialogTitle } from "@mui/material";
import TextField from '@mui/material/TextField';
import { bands } from '../../axios';


interface Props {
	dialogTitle: string;
}
export default function Edit({ dialogTitle }: Props) {
	const [on, toggle] = useToggle(false);
	const [band, setBand] = useState<schema.Band[]>([])
	const handleChange = (_event: SyntheticEvent<Element, Event>, value: string) => bands({ q: { name_cont: value } }).then(res => setBand(res.data))
	return (
		<>
			<Button onClick={toggle}>Edit</Button>
			<Dialog onClose={toggle} open={on}>
				<DialogTitle>{dialogTitle}</DialogTitle>
				<Autocomplete
					multiple
					options={band}
					getOptionLabel={(option) => option.name}
					renderInput={(params) => <TextField {...params} label="Band" variant="filled" />}
					onInputChange={handleChange}
					sx={{ width: '500px' }}
				/>

			</Dialog>
		</>
	)
}
