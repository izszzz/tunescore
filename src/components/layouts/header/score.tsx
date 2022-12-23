// references
// https://mui.com/material-ui/react-drawer/#mini-variant-drawer
import { useToggle } from "react-use";
import React, { useState } from "react";
import PlayButton from "../../elements/button/play";
import VolumeSliderInput from "../../elements/input/slider/volume";
import Header from ".";
import type { AlphaTabApi } from "@coderline/alphatab";

interface ScoreHeaderProps {
  apiRef: React.MutableRefObject<AlphaTabApi | null>;
  children: React.ReactNode;
}
const ScoreHeader = ({ apiRef, children }: ScoreHeaderProps) => {
  const [masterVolume, setMasterVolume] = useState(100);
  const [muted, toggleMuted] = useToggle(false);
  const handlePlay = () => apiRef.current?.playPause();
  const handleMute = () => {
    if (!apiRef.current) return;
    toggleMuted();
    if (apiRef.current.masterVolume === 100)
      apiRef.current.masterVolume = masterVolume / 100;
    else apiRef.current.masterVolume = 0;
  };
  const handleVolume = (_event: Event, value: number | number[]) => {
    if (!apiRef.current) return;
    if (!Array.isArray(value)) {
      setMasterVolume(value);
      apiRef.current.masterVolume = value / 100;
    }
  };

  return (
    <Header
      position="fixed"
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      {children}
      <PlayButton onClick={handlePlay} />
      <VolumeSliderInput
        muted={muted}
        volume={masterVolume}
        onMute={handleMute}
        onVolume={handleVolume}
      />
    </Header>
  );
};

export default ScoreHeader;
