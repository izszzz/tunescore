import React from "react"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Musics from "./pages/Musics";
import Music from "./pages/Music";
import Artists from "./pages/Artists";
import Artist from "./pages/Artist";


function createData(
	id: string,
	component: React.ReactNode,
) {
	return { id, component };
}

const pages = [
	createData("signin", <SignIn />),
	createData("signup", <SignUp />),
	createData("home", <Home />),
	createData("musics", <Musics />),
	createData("music", <Music />),
	createData("artists", <Artists />),
	createData("artist", <Artist />),
]

export default pages 