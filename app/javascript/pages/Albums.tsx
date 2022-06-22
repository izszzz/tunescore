import React, { useContext } from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';
import { GonContext } from '../contexts/GonContext';
import AlbumsTable from '../components/Tables/Albums';

export default function Albums() {
	const gon = useContext(GonContext)
	return (
		<SingleColumn
			header={<Header />}
			content={<AlbumsTable albums={gon?.albums || []} />}
		/>
	);
}