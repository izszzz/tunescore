import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import ControlTextField from '../../components/ControlTextField';
import FormLayout from '../../components/Forms/Layout';
import NewLayout from '../Basic/New';
import { albumSchema } from "../../yup"
// @ts-ignore
import * as Routes from '../../rails-routes';

export default function New() {
	return (
		<NewLayout url={Routes.albums_path} >
			{({ loading, onSubmit }) =>
				<SingleColumn
					header={<Header />}
					content={
						<FormLayout schema={albumSchema} onSubmit={onSubmit}>
							{({ control, formState: { errors } }) =>
								<>
									<ControlTextField
										type="text"
										name="title"
										defaultValue=""
										autoComplete="on"
										label="title"
										variant="outlined"
										margin="normal"
										control={control}
										errors={errors}
										fullWidth
									/>
									<LoadingButton type="submit" variant="contained" color="primary" fullWidth disableElevation>Add Album</LoadingButton>
								</>
							}
						</FormLayout>
					} />
			}
		</NewLayout>
	)
}
