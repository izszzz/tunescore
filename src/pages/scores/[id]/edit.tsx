import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Editor, { Monaco, useMonaco, } from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import Split from 'split.js'
import Score from "../../../components/layouts/score"
import EditorHeader from "../../../components/layouts/header/editor"
import Box from "@mui/material/Box";

const ScoreEdit: NextPage = () => {
	const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
	const [score, setScore] = useState("")
	function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
		editorRef.current = editor;
	}
	const handleChange = (value: string | undefined) => {
		if (value) setScore(value)
	}
	useEffect(() => {
		Split(['#editor', '#score'], { sizes: [50, 50] })
	}, [])
	return (
		<>
			<EditorHeader />
			<Box display="flex" flexDirection="row">
				<div id="editor">
					<Editor
						height="90vh"
						defaultLanguage="javascript"
						defaultValue={score}
						onMount={handleEditorDidMount}
						onChange={handleChange}
					/>
				</div>
				<div id="score">
					<Score score={score} />
				</div>
			</Box>
		</>
	)
}

export default ScoreEdit;