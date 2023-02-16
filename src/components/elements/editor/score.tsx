import React, { useEffect, useState } from "react";

import Editor from "@monaco-editor/react";
import Box from "@mui/material/Box";
import Split from "split.js";

import Score from "../../layouts/score";
import type { EditorHeaderProps } from "../header/editor";
import EditorHeader from "../header/editor";

interface ScoreEditorProps
  extends Omit<EditorHeaderProps, "onSave" | "onResolve"> {
  defaultValue: string;
  onSave: (value: string) => void;
  onResolve?: () => string;
}
const ScoreEditor = ({
  defaultValue,
  onSave,
  onResolve,
  ...props
}: ScoreEditorProps) => {
  const [value, setValue] = useState(defaultValue),
    handleResolve = () => onResolve && setValue(onResolve()),
    handleChange = (value: string | undefined) => value && setValue(value);
  useEffect(() => {
    Split(["#editor", "#score"], { sizes: [50, 50] });
  }, []);
  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <>
      <EditorHeader
        {...props}
        onSave={() => onSave(value)}
        onResolve={handleResolve}
      />
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
