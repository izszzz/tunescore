import React, { useContext, useEffect, useRef } from 'react'
import { AlphatabContext } from "../contexts/Alphatab"
import { GonContext } from '../contexts/Gon'

export default function MonacoEditor() {
	const gon = useContext(GonContext)
	const alphatab: any = useContext(AlphatabContext)
	const editorRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (editorRef && gon) {
			//@ts-ignore
			window.require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.33.0/min/vs' } });
			//@ts-ignore
			window.require(["vs/editor/editor.main"], () => {
				//@ts-ignore
				const model = monaco.editor.createModel(gon?.music.score, "javascript")
				alphatab.tex(gon?.music.score)
				//@ts-ignore
				const editor = window.monaco.editor.create(editorRef.current, {
					automaticLayout: true
				})
				editor.setModel(model)
				editor.getModel().onDidChangeContent(() => alphatab.tex(model.getValue()))
			})
		}
	}, [gon, editorRef])
	return <div ref={editorRef} />
}


