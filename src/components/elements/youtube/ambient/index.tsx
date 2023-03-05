// reference https://github.com/brunos3d/video-ambilight/blob/main/nextjs/src/components/VideoAmbilight/index.tsx
import { useCallback, useState } from "react";
import type { YouTubeEvent, YouTubePlayer } from "react-youtube";
import YouTube from "react-youtube";

import styles from "./styles.module.css";

export type RecursiveVoid = (func: RecursiveVoid) => void;

export type Props = {
  videoId: string;
};

const YoutubeAmbient = ({ videoId }: Props) => {
  const [videoPlayer, setVideoPlayer] = useState<YouTubePlayer>();
  const [ambilightPlayer, setAmbilightPlayer] = useState<YouTubePlayer>();

  const videoStateChange = useCallback(
    async (event: YouTubeEvent<number>) => {
      switch (event.data) {
        case YouTube.PlayerState.PLAYING:
          ambilightPlayer?.seekTo(
            (await videoPlayer?.getCurrentTime()) || 0,
            true
          );
          ambilightPlayer?.playVideo();
          break;
        case YouTube.PlayerState.PAUSED:
          ambilightPlayer?.seekTo(
            (await videoPlayer?.getCurrentTime()) || 0,
            true
          );
          ambilightPlayer?.pauseVideo();
          break;
      }
    },
    [ambilightPlayer, videoPlayer]
  );

  const optimizeAmbilight = useCallback(async () => {
    const qualityLevels: string[] = [
      ...((await ambilightPlayer?.getAvailableQualityLevels()) || []),
    ];
    ambilightPlayer?.mute();
    if (qualityLevels && qualityLevels.length && qualityLevels.length > 0) {
      qualityLevels.reverse();
      const lowestLevel =
        qualityLevels[qualityLevels.findIndex((q) => q !== "auto")];
      if (lowestLevel) ambilightPlayer?.setPlaybackQuality(lowestLevel);
    }
  }, [ambilightPlayer]);

  const ambilightStateChange = useCallback(
    (event: YouTubeEvent<number>) => {
      switch (event.data) {
        case YouTube.PlayerState.BUFFERING:
        case YouTube.PlayerState.PLAYING:
          optimizeAmbilight();
          break;
      }
    },
    [optimizeAmbilight]
  );

  return (
    <div className={styles.videoWrapper}>
      <div className={styles.ambilightWrapper}>
        <div className={styles.aspectRatio}>
          <YouTube
            className={styles.ambilightVideo}
            videoId={videoId}
            onReady={(e) => setVideoPlayer(e.target)}
            onStateChange={videoStateChange}
            opts={{ width: "100%", height: "100%" }}
          />
          <YouTube
            className={styles.ambilight}
            videoId={videoId}
            onReady={(e) => {
              setAmbilightPlayer(e.target);
              e.target.mute();
              optimizeAmbilight();
            }}
            onStateChange={ambilightStateChange}
            opts={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default YoutubeAmbient;
