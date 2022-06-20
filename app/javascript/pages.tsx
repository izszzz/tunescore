import React from "react"
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Musics from "./pages/Musics";
import Music from "./pages/Music";

export interface Page {
	id: string
	component: React.ReactNode
}

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
]

export default pages 