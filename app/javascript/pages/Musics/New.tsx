import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import ControlTextField from '../../components/ControlTextField';
import FormLayout from '../../components/Forms/Layout';
import { musicSchema } from "../../yup"
import { usePostMusicsMutation } from '../../store/api';

type New = Pick<schema.Music, "title">
export default function New() {
	const [updatePost, { isLoading }] = usePostMusicsMutation()
	const onSubmit = (data: New) => updatePost({ music: data })
	return (
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
							<LoadingButton type="submit" variant="contained" color="primary" loading={isLoading} fullWidth disableElevation>add Music</LoadingButton>
						</>
					}
				</FormLayout>
			}
		/>
	)
}
