import { NextPage } from "next";
import React from "react";
import ReactDiffViewer from 'react-diff-viewer';
import MusicLayout from "../../../../../components/layouts/music";
import PullLayout from "../../../../../components/layouts/pull";

const Code: NextPage = () => {
	return (
		<MusicLayout active="pullrequests">
			{({ data: music }) =>
				<PullLayout active="code">
					{({ data: pull }) =>
						<ReactDiffViewer oldValue={music?.score || ""} newValue={pull?.score || ""} />
					}
				</PullLayout>
			}
		</MusicLayout>
	)
}
export default Code