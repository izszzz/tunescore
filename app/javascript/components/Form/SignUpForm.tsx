import React from "react"
import ControlTextField from "../ControlTextField"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../schema";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function SignInForm (){
	const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signUpSchema),
  });
	const onSubmit= ()=>{}
	return(
    <Paper>
      <Box p={3}>
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
          <LoadingButton variant="contained" color="primary" fullWidth  disableElevation>Sign Up</LoadingButton>
        </form>
      </Box>
    </Paper>
	)
}