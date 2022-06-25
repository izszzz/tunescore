import React from "react"
import LoadingButton from '@mui/lab/LoadingButton';
import ControlTextField from "../ControlTextField"
import Layout from "./Layout"
import { signInSchema } from "../../yup";

export default function SignInForm() {
  const onSubmit = () => {
    console.log("submit")
  }
  return (
    <Layout schema={signInSchema}>
      {({ control, handleSubmit, formState: { errors } }) =>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlTextField
            type="email"
            name="email"
            defaultValue=""
            autoComplete="on"
            label="email"
            variant="outlined"
            margin="normal"
            control={control}
            errors={errors}
            fullWidth
          />
          <ControlTextField
            type="password"
            name="password"
            defaultValue=""
            autoComplete="on"
            label="password"
            variant="outlined"
            margin="normal"
            control={control}
            errors={errors}
            fullWidth
          />
          <LoadingButton type="submit" variant="contained" color="primary" fullWidth disableElevation>Sign In</LoadingButton>
        </form>
      }
    </Layout>
  )
}