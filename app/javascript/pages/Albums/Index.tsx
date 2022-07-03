import React, { useContext } from 'react';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import { GonContext } from '../../contexts/Gon';
import AlbumsTable from '../../components/Tables/Albums';
import { useGetAlbumsQuery } from '../../store/api';

export default function Albums() {
	const gon = useContext(GonContext)
	const a = useGetAlbumsQuery()
	console.log(a)
	return (
		<SingleColumn
			header={<Header />}
			content={<AlbumsTable albums={gon?.albums || []} />}
		/>
	);
}