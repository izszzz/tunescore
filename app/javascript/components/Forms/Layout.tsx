import React, { useState, useContext } from "react"
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { GonContext } from "../../contexts/Gon";
import { Gon } from "../../interfaces";

interface Props<T extends FieldValues> {
	schema: any
	children: (form: Omit<UseFormReturn<T, Gon | null>, "handleSubmit">) => React.ReactNode
	onSubmit: SubmitHandler<T>
}
export default function Layout<T>({ schema, children, onSubmit }: Props<T>) {
	const gon = useContext(GonContext)
	const { handleSubmit, ...form } = useForm<T>({
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