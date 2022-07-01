import React from 'react'
import Control from '../../Alphatab/components/Control';
import AlphatabContextProvider from "../../contexts/Alphatab"
import Score from '../../Alphatab/components/Score';

export default function Show() {
	return (
		<AlphatabContextProvider>
			{({ mainRef, viewportRef }) =>
				<>
					<Control>
					</Control>
					<Score mainRef={mainRef} viewportRef={viewportRef} />
				</>
			}
		</AlphatabContextProvider>
	)
}
