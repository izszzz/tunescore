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

interface DefaultIndexLayoutProps {
	resource: PrismaModelNameLowercase
	pathname: "/musics" | "/bands" | "/artists"
	meta: PaginatedResult<null>["meta"]
	children: React.ReactNode
}
const DefaultIndexLayout = ({ resource, meta, pathname, children }: DefaultIndexLayoutProps) => {
	const router = useRouter()
	const handleChange = (_event: React.ChangeEvent<unknown>, value: number) =>
		router.replace({ pathname, query: { page: String(value) } });
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter")
			router.replace({ pathname, query: { page: String(1), q: String((e.target as HTMLInputElement).value) } })
	}
	const getOptionLabel = (option: Resource) => {
		if (resource === "music") return (option as Music).title
		else return (option as Band | Artist).name
	}
	return (
		<DefaultSingleColumnLayout contained>
			<Grid container>
				<Grid item xs={10}>
					<SearchAutocomplete
						resource={resource}
						getOptionLabel={getOptionLabel}
						onKeyDown={handleKeyDown}
					/>
				</Grid>
				<Grid item xs={2}>
					<Button variant="outlined" startIcon={<AddIcon />} onClick={() => router.push({ pathname: `${pathname}/new` })}>New</Button>
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