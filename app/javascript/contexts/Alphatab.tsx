import { AlphaTabApi, model } from "@coderline/alphatab"
import React, { useEffect, useState, useRef, createContext, RefObject } from "react"

interface ChildrenProps {
  mainRef: RefObject<HTMLDivElement>
  viewportRef: RefObject<HTMLDivElement>
}
interface Props {
  children: ({ mainRef, viewportRef }: ChildrenProps) => React.ReactNode
}
type Api = AlphaTabApi | null

export default function AlphatabContextProvider({ children }: Props) {
  const [api, setApi] = useState<Api>(null)
  const mainRef = useRef(null)
  const viewportRef = useRef(null)
  useEffect(() => {
    if (mainRef.current && viewportRef.current) {
      const api = new window.alphaTab.AlphaTabApi(mainRef.current, {
        // file: "https://www.alphatab.net/files/canon.gp",
        tex: true,
        player: {
          enablePlayer: true,
          soundFont:
            "https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2",
          // scrollElement: this.viewportTarget, // this is the element to scroll during playback
        },
      })
      setApi(api)
    }
  }, [mainRef, viewportRef])
  return (
    <AlphatabContext.Provider value={api}>
      {children({ mainRef, viewportRef })}
    </AlphatabContext.Provider>
  )
}
export const AlphatabContext = createContext<Api>(null)
export const onPlayPause = (api: Api) => () => api?.playPause();
export const onStop = (api: Api) => () => api?.stop();
export const onLoop = (api: Api) => (loop: boolean) => { api && (api.isLooping = !loop) };
export const onVolume = (api: Api, newValue: number) => { api && (api.masterVolume = newValue / 100) }
export const onCountIn = (api: Api, countIn: boolean) => { api && (api.countInVolume = !countIn ? 1 : 0) }
export const onMetronome = (api: Api) => (metronome: boolean) => { api && (api.metronomeVolume = !metronome ? 1 : 0) }
export const onPlayerProgress = (api: Api) => (func: (percent: number) => void) => { api?.soundFontLoad.on(e => func(Math.floor((e.loaded / e.total) * 100))) }
export const onTracks = (api: Api) => (func: (tracks: any[]) => void) => { api?.scoreLoaded.on(score => { func(score.tracks) }) }
export const onLayout = (api: Api) => (layout: boolean) => {
  api && (api.settings.display.layoutMode = !layout ? window.alphaTab.LayoutMode.Horizontal : window.alphaTab.LayoutMode.Page)
  api?.updateSettings()
  api?.render()
}
export const onOverlay = (api: Api) => (started: () => void, finished: () => void) => {
  api?.renderStarted.on(() => started())
  api?.renderFinished.on(() => finished())
}