import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import YouTube from "react-youtube";
import Box from "@mui/material/Box";
import MusicLayout from "../../../components/layouts/show/music";
import AppleButton from "../../../components/elements/button/link/itunes";
import { trpc } from "../../../utils/trpc";
import ScoreButtonGroup from "../../../components/elements/button/group/score";
import VoteAlert from "../../../components/elements/alert/vote";
import BandLists from "../../../components/elements/list/band";
import { musicShowQuery } from "../../../paths/musics/[id]";
import { getRouterId } from "../../../helpers/router";
import { getCurrentUserId } from "../../../helpers/user";
import ParticipationLists from "../../../components/elements/list/participation";
import ArtistListItem from "../../../components/elements/list/item/artist";
import AlbumLists from "../../../components/elements/list/album";
import SpotifyButton from "../../../components/elements/button/link/spotify";
import CartButton from "../../../components/elements/button/loading/cart";
import type { NextPage } from "next";
import type { MusicLayoutProps } from "../../../components/layouts/show/music";

const Music: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const id = getRouterId(router);
  const query = musicShowQuery({ router, session });
  const { data } = trpc.music.findUniqueMusic.useQuery(query);
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} query={query} activeTab="info">
      {data.link?.streaming?.itunes?.id && (
        <AppleButton href={data.link?.streaming?.itunes.id} />
      )}
      {data.link?.streaming?.spotify?.id && (
        <SpotifyButton href={data.link?.streaming?.spotify.id} />
      )}
      {data.type === "ORIGINAL" ? (
        <CartButton disabled={!!musicData.carts.length} fullWidth />
      ) : (
        <ScoreButtonGroup
          watchButton={{
            route: {
              pathname: "/scores/[id]",
              query: { id },
            },
            buttonProps: {
              disabled: !musicData.score,
            },
          }}
          editButton={{
            route: {
              pathname: "/scores/[id]/edit",
              query: { id },
            },
            hidden:
              data.type === "COPY" &&
              musicData.user?.id !== getCurrentUserId(session),
          }}
        />
      )}

      {data.link?.streaming?.youtube?.id && (
        <YouTube
          className="youtubeContainer"
          videoId={data.link?.streaming?.youtube.id}
          opts={{ width: "100%", height: "100%" }}
        />
      )}

      {musicData.pulls.map((pull) => (
        <Box key={pull.id} mb={2}>
          <VoteAlert
            data={pull}
            goodIconButtonProps={{ disabled: true }}
            badIconButtonProps={{ disabled: true }}
          />
        </Box>
      ))}

      {musicData.band && <BandLists data={[musicData.band]} />}
      <ParticipationLists data={musicData.participations}>
        {(data) => <ArtistListItem data={data.artist} />}
      </ParticipationLists>
      <AlbumLists data={musicData.albums} />
    </MusicLayout>
  );
};

export default Music;
