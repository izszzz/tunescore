import React, { useContext } from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';
import { GonContext } from '../contexts/GonContext';
import BandsTable from '../components/Tables/Bands';

export default function Bands() {
	const gon = useContext(GonContext)
	return (
		<SingleColumn
			header={<Header />}
			content={<BandsTable bands={gon?.bands || []} />}
		/>
	);
}