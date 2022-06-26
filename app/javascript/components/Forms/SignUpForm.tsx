import React from "react"
import ControlTextField from "../ControlTextField"
import { signUpSchema } from "../../yup";
import LoadingButton from '@mui/lab/LoadingButton';
import Grid from "@mui/material/Grid";
import Layout from "./Layout";

export default function SignInForm() {
  const onSubmit = () => {
    console.log("submit")
  }
  return (
    <Layout schema={signUpSchema} onSubmit={onSubmit}>
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
          <LoadingButton type="submit" variant="contained" color="primary" fullWidth disableElevation>Sign Up</LoadingButton>
        </>
      }
    </Layout>
  )
}