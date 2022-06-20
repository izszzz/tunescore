import React from 'react';
import SingleColumn from '../templates/SingleColumn';
import Header from '../components/Headers/Header';
import GonContextProvider, { GonContext } from '../contexts/GonContext';

export default function Music() {
	return (
		<GonContextProvider>
			<GonContext.Consumer>
				{gon =>
					<SingleColumn
						header={<Header />}
						content={"content"}
					/>
				}
			</GonContext.Consumer>
		</GonContextProvider>
	);
}