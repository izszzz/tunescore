import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import Editor, { Monaco, useMonaco, } from "@monaco-editor/react";
import Split from 'split.js'
import Score from "../../../components/layouts/score"
import EditorHeader from "../../../components/layouts/header/editor"
import Box from "@mui/material/Box";

const ScoreEdit: NextPage = () => {
	const monaco = useMonaco();
	const editorRef = useRef(null);
	function handleEditorDidMount(editor: any, monaco: Monaco) {
		editorRef.current = editor;
	}
	useEffect(() => {
		Split(['#editor', '#score'], {
			sizes: [25, 75],
		})
	}, [])
	return (
		<>
			<EditorHeader />
			<Box display="flex" flexDirection="row">
				<div id="editor">
					<Editor
						height="90vh"
						defaultLanguage="javascript"
						defaultValue="// some comment"
						onMount={handleEditorDidMount}
					/>
				</div>
				<div id="score">
					<Score />
				</div>
			</Box>
		</>
	)
}

export default ScoreEdit;