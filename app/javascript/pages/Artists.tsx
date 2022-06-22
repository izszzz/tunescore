import React, { useContext } from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';
import { GonContext } from '../contexts/GonContext';
import ArtistsTable from '../components/Tables/Artists';

export default function Musics() {
	const gon = useContext(GonContext)
	return (
		<SingleColumn
			header={<Header />}
			content={<ArtistsTable artists={gon?.artists || []} />}
		/>
	);
}