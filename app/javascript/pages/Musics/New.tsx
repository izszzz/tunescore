import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import ControlTextField from '../../components/ControlTextField';
import FormLayout from '../../components/Forms/Layout';
import { musicSchema } from "../../yup"

export default function New() {
	const onSubmit = () => { console.log("submit") }
	return (
		<SingleColumn
			header={<Header />}
			content={
				<FormLayout schema={musicSchema} onSubmit={onSubmit}>
					{({ control, formState: { errors } }) =>
						<>
							<ControlTextField
								type="text"
								name="name"
								defaultValue=""
								autoComplete="on"
								label="title"
								variant="outlined"
								margin="normal"
								control={control}
								errors={errors}
								fullWidth
							/>
							<LoadingButton type="submit" variant="contained" color="primary" fullWidth disableElevation>add Music</LoadingButton>
						</>
					}
				</FormLayout>
			}
		/>
	)
}
