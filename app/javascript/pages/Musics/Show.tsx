import React, { useContext } from 'react';
import SingleColumn from '../../templates/SingleColumn';
import Header from '../../components/Headers/Header';
import { GonContext } from '../../contexts/Gon';
import Title from '../../components/Title';
import MusicTable from '../../components/Tables/Music';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import * as Routes from "../../rails-routes"

export default function Music() {
	const gon = useContext(GonContext)
	if (!gon) return
	return (
		<SingleColumn
			header={<Header />}
			content={
				<>
					<Title music={gon?.music} />
					<MusicTable music={gon?.music} />
					<Button component={Link} href={Routes.score_path({ id: gon.music.id })} fullWidth>Watch Score</Button>
					<Button component={Link} href={Routes.edit_score_path({ id: gon.music.id })} fullWidth>Edit Score</Button>
				</>
			}
		/>
	);
}