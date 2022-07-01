import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import Split from 'split.js'
import Box from '@mui/material/Box';
import Control from '../../Alphatab/components/Control';
import AlphatabContextProvider from "../../contexts/Alphatab"
// @ts-ignore
import * as Routes from "../../rails-routes"
import Score from '../../Alphatab/components/Score';
import MonacoEditor from '../../components/MonacoEditor';
import Save from '../../components/Buttons/Save';
import { GonContext } from '../../contexts/Gon';

export default function Show() {
	const gon = useContext(GonContext)
	useEffect(() => {
		Split(['#split-0', '#split-1'])
	}, [])
	const onSave = () => {
		//@ts-ignore
		axios.patch(Routes.music_path({ id: gon?.music.id }) + ".json", { music: { score: monaco.editor.getModels()[0].getValue() }, authenticity_token: gon?.authenticity_token })
	}
	return (
		<AlphatabContextProvider>
			{({ mainRef, viewportRef }) =>
				<>
					<Control>
						<Save onSave={onSave} />
					</Control>
					<Box className="split">
						<Box id="split-0">
							<Score mainRef={mainRef} viewportRef={viewportRef} />
						</Box>
						<Box id="split-1">
							<MonacoEditor />
						</Box>
					</Box>
				</>
			}
		</AlphatabContextProvider>
	)
}