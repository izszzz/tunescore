import { Artist, Band, Music } from '@prisma/client'
import React from "react";
import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';
import { PaginatedResult } from 'prisma-pagination'
import SearchAutocomplete from '../../../components/elements/autocomplete/search';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DefaultSingleColumnLayout from '../single_column/default';
import { PrismaModelNameLowercase, Resource } from '../../../types/common';
import { Route } from 'nextjs-routes';

interface DefaultIndexLayoutProps {
	resource: PrismaModelNameLowercase
	route: Route
	meta: PaginatedResult<null>["meta"]
	children: React.ReactNode
}
const DefaultIndexLayout = ({ resource, meta, route, children }: DefaultIndexLayoutProps) => {
	const router = useRouter()
	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) =>
		router.replace({ ...route, query: { page: String(value), ...route.query } });
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter")
			router.replace({ ...route, query: { page: String(1), q: String((e.target as HTMLInputElement).value), ...route.query } })
	}
	const getOptionLabel = (option: Resource) => {
		if (resource === "music") return (option as Music).title
		else return (option as Band | Artist).name
	}
	return (
		<DefaultSingleColumnLayout contained>
			<Grid container spacing={1}>
				<Grid item xs={11}>
					<SearchAutocomplete
						resource={resource}
						getOptionLabel={getOptionLabel}
						onKeyDown={handleKeyDown}
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
		</DefaultSingleColumnLayout>
	)
}
export default DefaultIndexLayout