import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MusicLayout from "../../../../../components/layouts/music";
import PullLayout from "../../../../../components/layouts/pull";

const Markdown = dynamic(
	() => import("@uiw/react-markdown-preview"),
	{ ssr: false }
);
const Pull: NextPage = () => {
	const router = useRouter()
	return (
		<MusicLayout active="pullrequests">
			{({ data }) =>
				<PullLayout active="conversation">
					{(pullQuery) =>
						<>
							<Markdown source={pullQuery.data?.body || ""} />
						</>
					}
				</PullLayout>
			}
		</MusicLayout>
	)
}
export default Pull