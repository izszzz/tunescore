import React, { useEffect, useRef } from 'react'
import Split from 'split.js'
import Control from '../../Alphatab/components/Control';
// @ts-ignore
import AlphatabContextProvider from "../../contexts/Alphatab"
import Score from '../../Alphatab/components/Score';
import Box from '@mui/material/Box';

export default function Show() {
	const editorRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		Split(['#split-0', '#split-1'])
	}, [])
	useEffect(() => {
		if (editorRef) {
			//@ts-ignore
			window.require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } });
			//@ts-ignore
			window.require(["vs/editor/editor.main"], () => {
				//@ts-ignore
				const model = monaco.editor.createModel("aaaa", "javascript")
				//@ts-ignore
				const editor = window.monaco.editor.create(editorRef.current, {
					automaticLayout: true
				})
				editor.setModel(model)
			})
		}
	}, [editorRef])
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
							<Box id="split-1">
								<div ref={editorRef} />
							</Box>
						</div>
					</>
				}
			</AlphatabContextProvider>
		</>
	)
}