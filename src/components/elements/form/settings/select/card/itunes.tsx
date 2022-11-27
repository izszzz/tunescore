import { useEffect, useState } from "react";
import { StreamingLink } from "@prisma/client";
import { ItunesMusic, ItunesResponse, searchItunesMusics, lookupItunesMusic } from "../../../../../../utils/itunes";
import MusicItunesCard from "../../../../card/music/itunes";
import CardSelectForm from "./"

interface MusicItunesSelectFormProps {
	streamingLink: StreamingLink | null | undefined
	term: string
	onSelect: (data: ItunesMusic | undefined) => void
	onRemove: () => void
}
const MusicItunesSelectForm = ({ streamingLink, term, onSelect, onRemove }: MusicItunesSelectFormProps) => {
	const [options, setOptions] = useState<ItunesResponse<ItunesMusic>>()
	const [value, setValue] = useState<ItunesMusic>()
	const [page, setPage] = useState(0)
	const handleChangePage = (_event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null, page: number) => {
		searchItunesMusics({ term, offset: 12 * page, limit: 12 }).then(res => {
			setOptions(res)
			setPage(page);
		})
	}
	useEffect(() => {
		if (streamingLink?.itunes) {
			const id = new URL(streamingLink.itunes).searchParams.get("i");
			if (id) lookupItunesMusic({ id }).then(res => setValue(res.results[0]))
		}
		else searchItunesMusics({ term, offset: 0, limit: 12 }).then(res => {
			setValue(undefined)
			setOptions(res)
		})
	}, [streamingLink, term])
	return (
		<CardSelectForm
			value={value}
			options={options?.results || []}
			largeCard={value => value && <MusicItunesCard size="large" data={value} onClick={onRemove} />}
			smallCard={value => value && <MusicItunesCard size="small" data={value} onClick={onSelect} />}
			gridProps={{
				item: true,
				xs: 6,
				sm: 4,
				md: 2,
			}}
			tablePaginationProps={{
				count: 100,
				rowsPerPage: 12,
				page: page,
				onPageChange: handleChangePage
			}}
		/>
	)
}

export default MusicItunesSelectForm