import React, { useEffect, useRef, useState } from "react";

import type { AlphaTabApi, model } from "@coderline/alphatab";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import { isNonEmpty } from "ts-array-length";
import { useToggle } from "usehooks-ts";

import ScoreHeader from "../elements/header/score";
import VolumeSliderInput from "../music-mateial-ui/input/slider/volume";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  // padding: theme.spacing(3),
  width: "100%",
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: "hidden",
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface ScoreLayoutProps {
  value: string;
}

const ScoreLayout = ({ value }: ScoreLayoutProps) => {
  const [open, setOpen] = useState(false);
  const [tracks, setTracks] = useState<model.Track[]>([]);
  const [activeTracks, setActiveTracks] = useState<model.Track[]>([]);
  const apiRef = useRef<AlphaTabApi | null>(null);
  const mainRef = useRef(null);
  const handleOpen = () => setOpen((p) => !p);
  const handleTrackClick = (track: model.Track) => {
    setActiveTracks((prevTracks) => {
      if (prevTracks.some((prevTrack) => prevTrack.index === track.index)) {
        if (isNonEmpty(prevTracks))
          return prevTracks.filter(
            (prevTrack) => prevTrack.index !== track.index
          );
        else return prevTracks;
      } else {
        return [...prevTracks, track];
      }
    });
  };
  useEffect(() => {
    if (apiRef.current) return;
    const settings = {
      // file: "https://www.alphatab.net/files/canon.gp",
      player: {
        enablePlayer: true,
        soundFont:
          "https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2",
        // scrollElement: wrapper.querySelector('.at-viewport') // this is the element to scroll during playback
      },
    };
    if (mainRef.current)
      apiRef.current = new window.alphaTab.AlphaTabApi(
        mainRef.current,
        settings
      );
    apiRef.current?.scoreLoaded.on((score) => {
      setTracks(score.tracks);
    });
    apiRef.current?.renderStarted.on(() => {
      if (apiRef.current) setActiveTracks(apiRef.current?.tracks);
    });
  }, []);
  useEffect(() => {
    apiRef.current?.renderTracks(activeTracks);
  }, [activeTracks]);
  useEffect(() => {
    apiRef.current?.tex(value);
  }, [value]);
  return (
    <Box
      minHeight="100vh"
      sx={{ display: "flex", bgcolor: "white" }}
      width="100%"
    >
      <Drawer
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
      >
        <List disablePadding sx={{ width: "100%" }}>
          {tracks.map((track, index) => (
            <Track
              activeTracks={activeTracks}
              apiRef={apiRef}
              key={index}
              onClick={handleTrackClick}
              track={track}
            />
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <Box ref={mainRef} />
      </Main>
      <ScoreHeader apiRef={apiRef}>
        <IconButton onClick={handleOpen}>
          <MenuIcon />
        </IconButton>
      </ScoreHeader>
    </Box>
  );
};

interface TrackProps {
  track: model.Track;
  activeTracks: model.Track[];
  apiRef: React.MutableRefObject<AlphaTabApi | null>;
  onClick: (track: model.Track) => void;
}
const Track = ({ apiRef, track, activeTracks, onClick }: TrackProps) => {
  const [masterVolume, setMasterVolume] = useState(100);
  const [muted, toggleMuted] = useToggle(false);
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
    <ListItemButton
      disableGutters
      onClick={() => onClick(track)}
      selected={activeTracks.some(
        (activeTrack) => activeTrack.index === track.index
      )}
    >
      <ListItemText
        primary={track.name}
        secondary={
          <VolumeSliderInput
            muted={muted}
            onMute={handleMute}
            onVolume={handleVolume}
            volume={masterVolume}
          />
        }
      />
    </ListItemButton>
  );
};

declare global {
  interface Window {
    alphaTab: {
      AlphaTabApi: typeof AlphaTabApi;
    };
  }
}

export default ScoreLayout;
