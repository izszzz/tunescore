import React, { useState, useContext } from "react"
import axios from "axios"
import LoadingButton from '@mui/lab/LoadingButton';
import ControlTextField from "../ControlTextField"
import Layout from "./Layout"
import { signInSchema } from "../../yup";
import { GonContext } from "../../contexts/Gon"
import * as Routes from '../../rails-routes';
import { SubmitHandler } from "react-hook-form";

interface SignIn {
  email: string;
  password: string;
}
export default function SignInForm() {
  const gon = useContext(GonContext)
  const [loading, setLoading] = useState(false)
  const onSubmit: SubmitHandler<SignIn> = (data) => {
    setLoading(true)
    axios.post(Routes.user_session_path(), { user: data, authenticity_token: gon?.authenticity_token }).then(res => {
      location.href = Routes.root_path()
    }).catch(err => {
      setLoading(false)
      console.log(err)
    })
  }
  return (
    <Layout<SignIn> schema={signInSchema} onSubmit={onSubmit}>
      {({ control, formState: { errors } }) =>
        <>
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
          <LoadingButton loading={loading} type="submit" variant="contained" color="primary" fullWidth disableElevation>Sign In</LoadingButton>
        </>
      }
    </Layout>
  )
}