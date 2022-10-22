// references
// https://mui.com/material-ui/react-drawer/#mini-variant-drawer
import React from "react";
import Header from ".";
import PlayButton from "../../elements/button/play";

interface ScoreHeaderProps {
	api: React.MutableRefObject<any>
	children: React.ReactNode;
}
const ScoreHeader = ({ api, children }: ScoreHeaderProps) => {
	const handlePlay = (value: boolean) => {
		api
	}
	return (
		<>
			<Header position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }} >
				{children}
				<PlayButton onClick={handlePlay} />
			</Header>
		</>
	);
};

export default ScoreHeader;