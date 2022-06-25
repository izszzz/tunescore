import React, {useEffect, useState, useRef, createContext} from "react"
import useScript from "react-script-hook"

export default function AlphatabContextProvider({children}) {
  const [api, setApi] = useState()
  const mainRef = useRef(null)
  const viewportRef = useRef(null)
  const [loading, error] = useScript({
    src: "https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/alphaTab.min.js",
  })
  useEffect(() => {
    if(mainRef && viewportRef && loading){
      const api = new window.alphaTab.AlphaTabApi(mainRef.current, {
        file: "https://www.alphatab.net/files/canon.gp",
        // tex: true,
        player: {
          enablePlayer: true,
          soundFont:
            "https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2",
          // scrollElement: this.viewportTarget, // this is the element to scroll during playback
        },
      })
      setApi(api)
    }
  }, [mainRef, viewportRef, loading])
  return (
    <AlphatabContext.Provider value={api}>
      {children({mainRef, viewportRef})}
    </AlphatabContext.Provider>
  )
}
export const AlphatabContext = createContext(null)
export const onPlayPause = (api) => () => api.playPause();
export const onStop = (api) => () => api.stop();
export const onLoop = (api)=> (loop) => { api.isLooping = !loop };
export const onVolume = (api, newValue) => { api.masterVolume = newValue / 100 }
export const onCountIn = (api, countIn) => { api.countInVolume = !countIn ? 1 : 0 }
export const onMetronome = (api) => (metronome) => { api.metronomeVolume = !metronome ? 1 :0 } 
export const onPlayerProgress = (api) => (func) => { api?.soundFontLoad.on(e => func(Math.floor((e.loaded / e.total) * 100))) }
export const onTracks = (api) => (func) => { api?.scoreLoaded.on(score =>{ func(score.tracks)} ) }
export const onLayout = (api) => (layout) => {
      api.settings.display.layoutMode = !layout ? alphaTab.LayoutMode.Horizontal:alphaTab.LayoutMode.Page
      api.updateSettings()
      api.render()
}
export const onOverlay = (api) => (started, finished) => {
  api?.renderStarted.on(() => started())
  api?.renderFinished.on(() => finished())
}