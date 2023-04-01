import Box from "@mui/material/Box";
import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useSnackbar } from "notistack";
import { isNonEmpty } from "ts-array-length";
import { match, P } from "ts-pattern";

import Article from "../../../components/elements/article";
import ScoreButtonGroup from "../../../components/elements/button/group/score";
import CartLoadingButton from "../../../components/elements/button/loading/cart";
import VoteCard from "../../../components/elements/card/vote";
import AlbumLists from "../../../components/elements/list/album";
import BandLists from "../../../components/elements/list/band";
import ArtistListItem from "../../../components/elements/list/item/artist";
import ParticipationLists from "../../../components/elements/list/participation";
import YoutubeAmbient from "../../../components/elements/youtube/ambient";
import MusicLayout from "../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../components/layouts/show/music";
import { findLinkYoutube } from "../../../helpers/link";
import { getCurrentUserId, isSelf } from "../../../helpers/user";
import { musicShowQuery } from "../../../paths/musics/[id]";
import { trpc } from "../../../utils/trpc";

const Music: NextPage = () => {
  const router = useRouter<"/musics/[id]">(),
    queryClient = useQueryClient(),
    { data: session } = useSession(),
    query = musicShowQuery({ router, session }),
    { enqueueSnackbar } = useSnackbar(),
    { data } = trpc.resource.findUniqueResource.useQuery(query),
    create = trpc.cart.createOneCart.useMutation({
      onSuccess: (data) => {
        queryClient.setQueryData<typeof data>(
          getQueryKey(trpc.resource.findUniqueResource, query, "query"),
          (prev) => prev && { ...prev, carts: [data] }
        );
        enqueueSnackbar("cart.create success");
      },
      onError: () => enqueueSnackbar("cart.create error"),
    });
  if (!data) return <></>;
  const musicData = data as MusicLayoutProps["data"],
    { music } = musicData,
    youtube = findLinkYoutube(musicData.links);
  return (
    <MusicLayout activeTab="info" data={musicData} query={query}>
      <Box mb={2}>
        <ActionButton
          data={musicData}
          loading={create.isLoading}
          onAddCart={() =>
            create.mutate({
              data: {
                user: { connect: { id: getCurrentUserId(session) } },
                music: { connect: { id: router.query.id } },
              },
            })
          }
        />
      </Box>

      {youtube && (
        <Box mb={2}>
          <YoutubeAmbient videoId={youtube.linkId} />
        </Box>
      )}
      {music?.pulls.map((pull) => (
        <Box key={pull.id} mb={2}>
          <VoteCard
            badIconButtonProps={{ disabled: true }}
            data={pull}
            goodIconButtonProps={{ disabled: true }}
          />
        </Box>
      ))}

      {music?.lyric && <Article text={music.lyric} />}

      {music?.band && <BandLists data={[music.band]} />}
      <ParticipationLists data={music?.participations ?? []}>
        {(participation, data) => (
          <ArtistListItem data={data?.artist}>{participation}</ArtistListItem>
        )}
      </ParticipationLists>
      <AlbumLists data={music?.albums ?? []} />
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
  return match(data.music)
    .with(
      {
        type: "ORIGINAL",
        price: P.when((price) => price || 0 > 0),
        transactions: P.when((transactions) => !isNonEmpty(transactions)),
      },
      (data) => (
        <CartLoadingButton
          disabled={isNonEmpty(data.carts)}
          fullWidth
          loading={loading}
          onClick={onAddCart}
        />
      )
    )
    .otherwise((data) => (
      <ScoreButtonGroup
        edit={{
          route: {
            pathname: "/musics/[id]/score/edit",
            query: { id: data?.id ?? "" },
          },
          hidden: !(
            data?.type === "ORIGINAL" && isSelf(session, { user: data?.user })
          ),
        }}
        watch={{
          route: {
            pathname: "/musics/[id]/score",
            query: { id: data?.id ?? "" },
          },
          buttonProps: { disabled: !data?.score },
        }}
      />
    ));
};

export default Music;
