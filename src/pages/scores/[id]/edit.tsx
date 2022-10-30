import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import Editor from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import Split from 'split.js'
import Score from "../../../components/layouts/score"
import EditorHeader from "../../../components/layouts/header/editor"
import Box from "@mui/material/Box";
import { trpc } from "../../../utils/trpc";
import { useRouter } from "next/router";

const ScoreEdit: NextPage = () => {
	const [score, setScore] = useState("")
	const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
	const router = useRouter()
	trpc.useQuery(["music.show", { id: router.query.id as string }], {
		onSuccess: (data) => {
			setScore(data?.score || "");
			editorRef.current?.setValue(data?.score || "")
		}
	});
	const updateMusic = trpc.useMutation("music.update");
	const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => { editorRef.current = editor; }
	const handleChange = (value: string | undefined) => value && setScore(value)
	const handleSave = () => updateMusic.mutate({ id: router.query.id as string, score })
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
					<Score score={score} />
				</div>
			</Box>
		</>
	)
}

export default ScoreEdit;