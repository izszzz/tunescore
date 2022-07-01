import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import ControlTextField from '../../components/ControlTextField';
import FormLayout from '../../components/Forms/Layout';
import NewLayout from '../Basic/New';
import { artistSchema } from "../../yup"
// @ts-ignore
import * as Routes from '../../rails-routes';

type New = Pick<schema.Artist, "name">
export default function New() {
	return (
		<NewLayout<New> url={Routes.artists_path} >
			{({ loading, onSubmit }) =>
				<SingleColumn
					header={<Header />}
					content={
						<FormLayout<New> schema={artistSchema} onSubmit={onSubmit}>
							{({ control, formState: { errors } }) =>
								<>
									<ControlTextField
										type="text"
										name="name"
										defaultValue=""
										autoComplete="on"
										label="name"
										variant="outlined"
										margin="normal"
										control={control}
										errors={errors}
										fullWidth
									/>
									<LoadingButton loading={loading} type="submit" variant="contained" color="primary" fullWidth disableElevation>add Artist</LoadingButton>
								</>
							}
						</FormLayout>
					} />
			}
		</NewLayout>
	)
}
