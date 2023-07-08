// references
// https://mui.com/material-ui/react-drawer/#mini-variant-drawer
import type { PropsWithChildren } from "react";
import React from "react";

import type { AlphaTabApi } from "@coderline/alphatab";
import { useRecoilState } from "recoil";
import { useToggle } from "usehooks-ts";

import { volumeState } from "../../../atoms/volume";
import PlayButton from "../../music-mateial-ui/button/icon/toggle/play";
import VolumeSliderInput from "../../music-mateial-ui/input/slider/volume";

import Header from ".";

interface ScoreHeaderProps {
  apiRef: React.MutableRefObject<AlphaTabApi | null>;
}
const ScoreHeader = ({
  apiRef,
  children,
}: PropsWithChildren<ScoreHeaderProps>) => {
  const [volume, setVolume] = useRecoilState(volumeState),
    [muted, toggleMuted] = useToggle(false),
    [played, togglePlayed] = useToggle(false),
    handlePlay = () => {
      togglePlayed();
      apiRef.current?.playPause();
    },
    handleMute = () => {
      if (!apiRef.current) return;
      toggleMuted();
      if (apiRef.current.masterVolume === 100)
        apiRef.current.masterVolume = volume / 100;
      else apiRef.current.masterVolume = 0;
    },
    handleVolume = (_event: Event, value: number | number[]) => {
      if (!apiRef.current) return;
      if (!Array.isArray(value)) {
        setVolume(value);
        apiRef.current.masterVolume = value / 100;
      }
    };

  return (
    <Header
      position="fixed"
      sx={{
        top: "auto",
        bottom: 0,
      }}
    >
      {children}
      <PlayButton onClick={handlePlay} value={played} />
      <VolumeSliderInput
        muted={muted}
        onMute={handleMute}
        onVolume={handleVolume}
        volume={volume}
      />
    </Header>
  );
};

export default ScoreHeader;
