import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";
import Box from "@mui/material/Box";
import Split from "split.js";

import Score from "../../layouts/score";
import EditorHeader from "../header/editor";

interface ScoreEditorProps {
  defaultValue: string;
  onSave: (value: string) => void;
}
const ScoreEditor = ({ defaultValue, onSave }: ScoreEditorProps) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (value: string | undefined) => value && setValue(value);
  const handleSave = () => onSave(value);
  useEffect(() => {
    Split(["#editor", "#score"], { sizes: [50, 50] });
  }, []);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

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
  );
};
export default ScoreEditor;
