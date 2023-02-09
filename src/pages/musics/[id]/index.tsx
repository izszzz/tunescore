import YouTube from "react-youtube";

import Box from "@mui/material/Box";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { match, P } from "ts-pattern";

import VoteAlert from "../../../components/elements/alert/vote";
import ScoreButtonGroup from "../../../components/elements/button/group/score";
import LinkButtons from "../../../components/elements/button/link";
import CartLoadingButton from "../../../components/elements/button/loading/cart";
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
  const router = useRouter(),
    queryClient = useQueryClient(),
    { data: session } = useSession(),
    query = musicShowQuery({ router, session }),
    { enqueueSnackbar } = useSnackbar(),
    { data } = trpc.music.findUniqueMusic.useQuery(query),
    create = trpc.cart.createOneCart.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData<typeof data>(
          getQueryKey(trpc.music.findUniqueMusic, query, "query"),
          (prev) => prev && { ...prev, carts: [data] }
        );
        enqueueSnackbar("cart.create success");
      },
      onError: () => enqueueSnackbar("cart.create error"),
    });
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"];
  return (
    <MusicLayout data={musicData} query={query} activeTab="info">
      {data.link && <LinkButtons data={data.link} />}

      <ActionButton
        data={musicData}
        loading={create.isLoading}
        onAddCart={() =>
          create.mutate({
            data: {
              user: {
                connect: { id: getCurrentUserId(session) },
              },
              music: { connect: { id: getRouterId(router) } },
            },
          })
        }
      />

      {data.link?.streaming?.youtube?.id && (
        <YouTube
          className="youtubeContainer"
          videoId={data.link.streaming.youtube.id}
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
        {(participation, data) => (
          <ArtistListItem data={data.artist}>{participation}</ArtistListItem>
        )}
      </ParticipationLists>
      <AlbumLists data={musicData.albums} />
    </MusicLayout>
  );
};

interface ActionButtonProps {
  data: MusicLayoutProps["data"];
  loading: boolean;
  onAddCart: () => void;
}
const ActionButton = ({ data, loading, onAddCart }: ActionButtonProps) => {
  const { data: session } = useSession();
  return match(data)
    .with(
      {
        type: "ORIGINAL",
        price: P.when((price) => price || 0 > 0),
        purchases: P.when((purchases) => !purchases.length),
      },
      () => (
        <CartLoadingButton
          disabled={!!data.carts.length}
          loading={loading}
          onClick={onAddCart}
          fullWidth
        />
      )
    )
    .otherwise(({ id, score, user }) => (
      <ScoreButtonGroup
        watchButton={{
          route: {
            pathname: "/scores/[id]",
            query: { id },
          },
          buttonProps: {
            disabled: !score,
          },
        }}
        editButton={{
          route: {
            pathname: "/scores/[id]/edit",
            query: { id },
          },
          hidden:
            data.type === "ORIGINAL" && user?.id !== getCurrentUserId(session),
        }}
      />
    ));
};

export default Music;
