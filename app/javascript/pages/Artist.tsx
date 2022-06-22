import React, { useContext } from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';
import { GonContext } from '../contexts/GonContext';

export default function Musics() {
	const gon = useContext(GonContext)
	return (
		<SingleColumn
			header={<Header />}
			content={<p>{gon?.artist.name}</p>}
		/>
	);
}