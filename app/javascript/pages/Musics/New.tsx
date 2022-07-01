import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import ControlTextField from '../../components/ControlTextField';
import FormLayout from '../../components/Forms/Layout';
import NewLayout from '../Basic/New';
import { musicSchema } from "../../yup"
// @ts-ignore
import * as Routes from '../../rails-routes';

type New = Pick<schema.Music, "title">
export default function New() {
	return (
		<NewLayout<New> url={Routes.musics_path} >
			{({ loading, onSubmit }) =>
				<SingleColumn
					header={<Header />}
					content={
						<FormLayout<New> schema={musicSchema} onSubmit={onSubmit}>
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
									<LoadingButton type="submit" variant="contained" color="primary" loading={loading} fullWidth disableElevation>add Music</LoadingButton>
								</>
							}
						</FormLayout>
					}
				/>
			}
		</NewLayout>
	)
}
