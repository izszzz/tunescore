import React, { createContext, useEffect, useState } from "react"
import { Gon } from "../interfaces"

interface Props {
	children: React.ReactNode
}
export const GonContext = createContext<Gon | null>(null)
export default function GonContextProvider({ children }: Props) {
	const [gon, setGon] = useState<Gon | null>(null)
	useEffect(() => { setGon(window.gon) }, [])
	return (
		<GonContext.Provider value={gon}>
			{children}
		</GonContext.Provider>
	)
}
