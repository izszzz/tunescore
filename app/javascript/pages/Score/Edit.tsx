import React, { useEffect } from 'react'
import Control from '../../Alphatab/components/Control';
// @ts-ignore
import AlphatabContextProvider from "../../contexts/Alphatab"
import Score from '../../Alphatab/components/Score';
import Split from 'split.js'

export default function Show() {
	useEffect(() => {
		Split(['#split-0', '#split-1'])
	}, [])
	return (
		<>
			<AlphatabContextProvider>
				{({ mainRef, viewportRef }) =>
					<>
						<Control>
						</Control>
						<div className="split">
							<div id="split-0">
								<Score mainRef={mainRef} viewportRef={viewportRef} />
							</div>
							<div id="split-1">edit</div>

						</div>
					</>
				}
			</AlphatabContextProvider>
		</>
	)
}