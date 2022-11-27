import React from "react";
import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';
import { PaginatedResult } from 'prisma-pagination'
import CustomAutocomplete, { CustomAutocompleteProps } from '../../../components/elements/autocomplete/search';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SingleColumnLayout, { SingleColumnLayoutProps } from '../single_column';
import { Route } from 'nextjs-routes';

export interface IndexLayoutProps<T> extends Pick<SingleColumnLayoutProps, "children" | "header"> {
	route: Route
	meta: PaginatedResult<null>["meta"]
	searchAutocompleteProps: CustomAutocompleteProps<T, false, false, false>
}
function IndexLayout<T>({ header, meta, route, children, searchAutocompleteProps }: IndexLayoutProps<T>) {
	const router = useRouter()
	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) =>
		router.replace({ ...route, query: { page: String(value), ...route.query } });
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter")
			router.replace({ ...route, query: { ...route.query, page: String(1), q: String((e.target as HTMLInputElement).value) } })
	}
	return (
		<SingleColumnLayout contained header={header}>
			<Grid container spacing={1}>
				<Grid item xs={11}>
					<CustomAutocomplete
						{...searchAutocompleteProps}
						textFieldProps={{
							...searchAutocompleteProps.textFieldProps,
							onKeyDown: handleKeyDown
						}}
					/>
				</Grid>
				<Grid item xs={1} display="flex" alignItems="stretch">
					<Button variant="outlined" startIcon={<AddIcon />} onClick={() => router.push(route)} fullWidth>New</Button>
				</Grid>
			</Grid>
			{children}
			<Box display="flex" justifyContent="center">
				<Pagination page={meta.currentPage} count={meta.lastPage} variant="outlined" onChange={handleChange} />
			</Box>
		</SingleColumnLayout>
	)
}
export default IndexLayout