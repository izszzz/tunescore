import { useEffect, useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import * as monaco from 'monaco-editor';
import Split from 'split.js'
import Score from "../../layouts/score"
import EditorHeader from "../../layouts/header/editor"
import Box from "@mui/material/Box";
import { trpc } from "../../../utils/trpc";
import React from "react";

interface ScoreEditorProps {
	id: string;
	defaultValue: string;
	resource: "music" | "pull"
}
const ScoreEditor = ({ id, defaultValue, resource }: ScoreEditorProps) => {
	const [value, setValue] = useState(defaultValue)
	const updateMusic = trpc.useMutation(`${resource}.update`);
	const handleChange = (value: string | undefined) => value && setValue(value)
	const handleSave = () => updateMusic.mutate({ id, score: value })
	useEffect(() => {
		Split(['#editor', '#score'], { sizes: [50, 50] })
	}, [])
	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])

	return (
		<>
			<EditorHeader onSave={handleSave} />
			<Box display="flex" flexDirection="row">
				<div id="editor">
					<Editor
						value={value}
						height="90vh"
						defaultLanguage="javascript"
						onChange={handleChange}
					/>
				</div>
				<div id="score">
					<Score value={value} />
				</div>
			</Box>
		</>
	)
}
export default ScoreEditor