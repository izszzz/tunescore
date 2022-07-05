import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import ControlTextField from '../../components/ControlTextField';
import FormLayout from '../../components/Forms/Layout';
import { artistSchema } from "../../yup"
import { usePostArtistsMutation } from '../../store/api';

type New = Pick<schema.Artist, "name">
export default function New() {
	const [updatePost, { isLoading }] = usePostArtistsMutation()
	const onSubmit = (data: New) => updatePost({ artist: data })
	return (
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
							<LoadingButton loading={isLoading} type="submit" variant="contained" color="primary" fullWidth disableElevation>add Artist</LoadingButton>
						</>
					}
				</FormLayout>
			} />
	)
}
