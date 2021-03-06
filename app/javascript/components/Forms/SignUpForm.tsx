import React, { useContext, useState } from "react"
import axios from "axios"
import { SubmitHandler } from "react-hook-form";
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from "@mui/material/Grid";
import ControlTextField from "../ControlTextField"
import { signUpSchema } from "../../yup";
import Layout from "./Layout";
import { GonContext } from "../../contexts/Gon"
import * as Routes from '../../rails-routes';

interface SignUp {
  email: string;
  nickname: string;
  familyname: string;
  givenname: string;
  password: string;
  password_confirmation: string;
}
export default function SignUpForm() {
  const gon = useContext(GonContext)
  const [loading, setLoading] = useState(false)
  const onSubmit: SubmitHandler<SignUp> = (data) => {
    setLoading(true)
    axios.post(Routes.user_registration_path(), { ...data, authenticity_token: gon?.authenticity_token }).then(res => {
      location.href = Routes.root_path()
    }).catch(err => {
      setLoading(false)
      console.log(err)
    })
  }
  return (
    <Layout schema={signUpSchema} onSubmit={onSubmit}>
      {({ control, formState: { errors } }) =>
        <>
          <ControlTextField<SignUp>
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
          <ControlTextField<SignUp>
            type="nickname"
            name="nickname"
            defaultValue=""
            autoComplete="on"
            label="nickname"
            variant="outlined"
            margin="normal"
            control={control}
            errors={errors}
            fullWidth
          />
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ControlTextField
                name="familyname"
                defaultValue=""
                label={"familyname"}
                variant="outlined"
                control={control}
                errors={errors}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <ControlTextField
                name="givenname"
                defaultValue=""
                label={"givenname"}
                variant="outlined"
                control={control}
                errors={errors}
                fullWidth
              />
            </Grid>
          </Grid>
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
          <ControlTextField
            type="password"
            name="password_confirmation"
            defaultValue=""
            autoComplete="on"
            label="password_confirmation"
            variant="outlined"
            margin="normal"
            control={control}
            errors={errors}
            fullWidth
          />
          <LoadingButton loading={loading} type="submit" variant="contained" color="primary" fullWidth disableElevation>Sign Up</LoadingButton>
        </>
      }
    </Layout>
  )
}