import React, { useEffect, useState } from "react"
import GoogleIcon from "../../elements/icon/google"
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { getProviders, signIn } from "next-auth/react";
import Button from '@mui/material/Button';
import { useModal } from "../../../hooks/useModal";


const AuthDialog = () => {
	const { open, handleClose } = useModal()
	const [providers, setProviders] = useState<Awaited<ReturnType<typeof getProviders>>>()
	useEffect(() => {
		(async () => { setProviders(await getProviders()) })()
	}, [])
	return (
		<Dialog
			open={open}
			onClose={handleClose}
		>
			<DialogTitle>
				Sign In
			</DialogTitle>
			<DialogActions>
				{providers && Object.values(providers).map((provider) =>
					<Button key={provider.name} variant="outlined" startIcon={<GoogleIcon />} onClick={() => signIn(provider.id, { callbackUrl: "http://localhost/" })}>Login with {provider.name}</Button>
				)}
			</DialogActions>
		</Dialog>
	)
}

export default AuthDialog