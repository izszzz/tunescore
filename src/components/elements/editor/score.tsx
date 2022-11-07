import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import Split from 'split.js'
import Score from "../../layouts/score"
import EditorHeader from "../../layouts/header/editor"
import Box from "@mui/material/Box";
import { trpc } from "../../../utils/trpc";
import { useRouter } from "next/router";
import React from "react";

interface ScoreEditorProps {
	defaultValue: string;
}
const ScoreEditor = ({ defaultValue }: ScoreEditorProps) => {
	const [value, setValue] = useState(defaultValue)
	const router = useRouter()
	const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
	const updateMusic = trpc.useMutation("music.update");
	const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => { editorRef.current = editor; }
	const handleChange = (value: string | undefined) => value && setValue(value)
	const handleSave = () => updateMusic.mutate({ id: router.query.id as string, score: value })
	useEffect(() => {
		Split(['#editor', '#score'], { sizes: [50, 50] })
	}, [])

	return (
		<>
			<EditorHeader onSave={handleSave} />
			<Box display="flex" flexDirection="row">
				<div id="editor">
					<Editor
						height="90vh"
						defaultLanguage="javascript"
						onMount={handleEditorDidMount}
						onChange={handleChange}
					/>
				</div>
				<div id="score">
					<Score score={value} />
				</div>
			</Box>
		</>
	)
}
export default ScoreEditor