import { NextPage } from "next";
import React from "react";
import MusicLayout from "../../../../../components/layouts/music";

const Issue: NextPage = () => {
	return (
		<MusicLayout active="issues">
			{({ data }) =>
				<p>issue</p>
			}
		</MusicLayout>
	)
}
export default Issue