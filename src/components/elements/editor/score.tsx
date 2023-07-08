import React, { useEffect, useRef, useState } from "react";

import Editor from "@monaco-editor/react";
import Box from "@mui/material/Box";
import { useRecoilState } from "recoil";
import Split from "split.js";
import { useDebouncedCallback } from "use-debounce";
import { useDarkMode } from "usehooks-ts";

import { editorSplitSizesState } from "../../../atoms/editorSplitSizes";
import { debounce } from "../../../consts";
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
    [editorSplitSizes, setEditorSplitSizes] = useRecoilState(
      editorSplitSizesState
    ),
    split = useRef<Split.Instance>(),
    { isDarkMode } = useDarkMode(),
    handleResolve = () => onResolve && setValue(onResolve()),
    handleChange = (value: string | undefined) => value && setValue(value),
    debounced = useDebouncedCallback(handleChange, debounce);

  useEffect(() => {
    if (!split.current)
      split.current = Split(["#editor", "#score"], { sizes: editorSplitSizes });
    return () => {
      if (split.current) setEditorSplitSizes(split.current.getSizes());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <EditorHeader
        {...props}
        onResolve={handleResolve}
        onSave={() => onSave(value)}
      />
      <Box display="flex" flexDirection="row">
        <div id="editor">
          <Editor
            defaultLanguage="tex"
            height="90vh"
            onChange={debounced}
            theme={isDarkMode ? "vs-dark" : "vs-light"}
            value={value}
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
