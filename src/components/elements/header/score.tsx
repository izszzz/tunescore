// references
// https://mui.com/material-ui/react-drawer/#mini-variant-drawer
import React, { useState } from "react";
import { useToggle } from "react-use";

import type { AlphaTabApi } from "@coderline/alphatab";

import PlayButton from "../../music-mateial-ui/button/icon/toggle/play";
import VolumeSliderInput from "../../music-mateial-ui/input/slider/volume";

import Header from ".";

interface ScoreHeaderProps {
  apiRef: React.MutableRefObject<AlphaTabApi | null>;
  children: React.ReactNode;
}
const ScoreHeader = ({ apiRef, children }: ScoreHeaderProps) => {
  const [masterVolume, setMasterVolume] = useState(100);
  const [muted, toggleMuted] = useToggle(false);
  const [played, togglePlayed] = useToggle(false);
  const handlePlay = () => {
    togglePlayed();
    apiRef.current?.playPause();
  };
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
      sx={{
        top: "auto",
        bottom: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      {children}
      <PlayButton value={played} onClick={handlePlay} />
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
