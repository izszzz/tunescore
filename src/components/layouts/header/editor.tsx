import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import React from "react";
import Header from ".";

interface EditorHeaderProps {
	onSave: () => void
}
const EditorHeader = ({ onSave }: EditorHeaderProps) => {
	return (
		<>
			<Header>
				editor
				<Button onClick={onSave}>
					Save
					<CloudDoneIcon />
				</Button>
			</Header>
			<Toolbar />
		</>
	);
};

export default EditorHeader;