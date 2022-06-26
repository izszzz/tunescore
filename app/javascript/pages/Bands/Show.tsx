import React, { useContext } from 'react';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import { GonContext } from '../../contexts/Gon';

export default function Band() {
	const gon = useContext(GonContext)
	return (
		<SingleColumn
			header={<Header />}
			content={gon?.band.name}
		/>
	);
}