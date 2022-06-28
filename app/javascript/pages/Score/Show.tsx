import React, { RefObject } from 'react'
import Control from '../../Alphatab/components/Control';
// @ts-ignore
import AlphatabContextProvider from "../../contexts/Alphatab"
import Score from '../../Alphatab/components/Score';

export default function Show() {
	return (
		<AlphatabContextProvider>
			{({ mainRef, viewportRef }: { mainRef: RefObject<HTMLDivElement>, viewportRef: RefObject<HTMLDivElement> }) =>
				<>
					<Control>
					</Control>
					<Score mainRef={mainRef} viewportRef={viewportRef} />
				</>
			}
		</AlphatabContextProvider>
	)
}
