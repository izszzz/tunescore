import React, { useContext } from "react"
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { FieldValues, useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GonContext } from "../../contexts/GonContext";
import { Gon } from "../../interfaces";

interface Props {
	schema: any
	children: (form: UseFormReturn<FieldValues, Gon | null>) => React.ReactNode
}
export default function Layout({ schema, children }: Props) {
	const gon = useContext(GonContext)
	const form = useForm({
		resolver: yupResolver(schema),
		context: gon
	});
	return (
		<Box height="100%">
			<Paper>
				<Box p={3}>
					{children(form)}
				</Box>
			</Paper>
		</Box>
	)
}