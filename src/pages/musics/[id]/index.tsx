import YouTube from "react-youtube";

import Box from "@mui/material/Box";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import VoteAlert from "../../../components/elements/alert/vote";
import ScoreButtonGroup from "../../../components/elements/button/group/score";
import LinkButtons from "../../../components/elements/button/link";
import CartButton from "../../../components/elements/button/loading/cart";
import AlbumLists from "../../../components/elements/list/album";
import BandLists from "../../../components/elements/list/band";
import ArtistListItem from "../../../components/elements/list/item/artist";
import ParticipationLists from "../../../components/elements/list/participation";
import MusicLayout from "../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../components/layouts/show/music";
import { getRouterId } from "../../../helpers/router";
import { getCurrentUserId } from "../../../helpers/user";
import { musicShowQuery } from "../../../paths/musics/[id]";
import { trpc } from "../../../utils/trpc";

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
      {data.link && <LinkButtons data={data.link} />}
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
