import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import ControlTextField from '../../components/ControlTextField';
import FormLayout from '../../components/Forms/Layout';
import { bandSchema } from "../../yup"
import { usePostBandsMutation } from '../../store/api';

type New = Pick<schema.Band, "name">
export default function New() {
	const [updatePost,
		{ isLoading }
	] = usePostBandsMutation()
	const onSubmit = (data: New) => {
		const formatData = { band: data }
		updatePost(formatData)
	}
	return (
		<SingleColumn
			header={<Header />}
			content={
				<FormLayout<New> schema={bandSchema} onSubmit={onSubmit}>
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
							<LoadingButton loading={isLoading} type="submit" variant="contained" color="primary" fullWidth disableElevation>add Band</LoadingButton>
						</>
					}
				</FormLayout>
			} />
	)
}