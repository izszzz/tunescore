import React from "react"
import ControlTextField from "../ControlTextField"
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../schema";
import LoadingButton from '@mui/lab/LoadingButton';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function SignInForm (){
	const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signInSchema),
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
          <LoadingButton variant="contained" color="primary" fullWidth  disableElevation>Sign In</LoadingButton>
        </form>
      </Box>
    </Paper>
	)
}