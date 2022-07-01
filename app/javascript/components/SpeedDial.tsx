import * as React from 'react';
import * as Routes from '../rails-routes';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DiscFullIcon from '@mui/icons-material/DiscFull';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

function createData(icon: React.ReactNode, name: string, path: string) {
	return { icon, name, path }
}

const actions = [
	createData(<DiscFullIcon />, "Album", Routes.new_album_path()),
	createData(<PersonIcon />, "Artist", Routes.new_artist_path()),
	createData(<GroupIcon />, "Band", Routes.new_band_path()),
	createData(<MusicNoteIcon />, "Music", Routes.new_music_path()),
];

export default function BasicSpeedDial() {
	const onClick = (path: string) => () => location.href = path
	return (
		<SpeedDial
			ariaLabel="SpeedDial basic example"
			sx={{ position: 'absolute', bottom: 50, right: 50 }}
			icon={<SpeedDialIcon />}
		>
			{actions.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					onClick={onClick(action.path)}
				/>
			))}
		</SpeedDial>
	);
}
