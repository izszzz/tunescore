import React, { useContext } from "react"
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GonContext } from "../../contexts/Gon";
import { Gon } from "../../interfaces";

interface Props {
	schema: any
	children: (form: Omit<UseFormReturn<FieldValues, Gon | null>, "handleSubmit">) => React.ReactNode
	onSubmit: () => void
}
export default function Layout({ schema, children, onSubmit }: Props) {
	const gon = useContext(GonContext)
	const { handleSubmit, ...form } = useForm({
		resolver: yupResolver(schema),
		context: gon
	});
	return (
		<Box height="100%">
			<Paper>
				<Box p={3}>
					<form onSubmit={handleSubmit(onSubmit)}>
						{children(form)}
					</form>
				</Box>
			</Paper>
		</Box>
	)
}