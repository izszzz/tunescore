import React, { useContext } from 'react';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import { GonContext } from '../../contexts/Gon';

export default function Album() {
	const gon = useContext(GonContext)
	return (
		<SingleColumn
			header={<Header />}
			content={<p>{gon?.album.title}</p>}
		/>
	);
}