import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import ControlTextField from '../../components/ControlTextField';
import FormLayout from '../../components/Forms/Layout';
import { albumSchema } from "../../yup"
import { usePostAlbumsMutation } from '../../store/api';

type New = Pick<schema.Album, "title">
export default function New() {
	const [updatePost, { isLoading }] = usePostAlbumsMutation()
	const onSubmit = (data: New) => updatePost({ album: data })
	return (
		<SingleColumn
			header={<Header />}
			content={
				<FormLayout<New> schema={albumSchema} onSubmit={onSubmit}>
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
							<LoadingButton loading={isLoading} type="submit" variant="contained" color="primary" fullWidth disableElevation>Add Album</LoadingButton>
						</>
					}
				</FormLayout>
			} />
	)
}
