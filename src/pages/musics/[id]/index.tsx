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
import LinkButtons from "../../../components/elements/button/link";
import CartLoadingButton from "../../../components/elements/button/loading/cart";
import VoteCard from "../../../components/elements/card/vote";
import AlbumLists from "../../../components/elements/list/album";
import BandLists from "../../../components/elements/list/band";
import ArtistListItem from "../../../components/elements/list/item/artist";
import ParticipationLists from "../../../components/elements/list/participation";
import YoutubeAmbient from "../../../components/elements/youtube/ambient";
import MusicLayout from "../../../components/layouts/show/music";
import type { MusicLayoutProps } from "../../../components/layouts/show/music";
import { getCurrentUserId, isSelf } from "../../../helpers/user";
import { musicShowQuery } from "../../../paths/musics/[id]";
import { trpc } from "../../../utils/trpc";

const Music: NextPage = () => {
  const router = useRouter<"/musics/[id]">(),
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
  const musicData = data as MusicLayoutProps["data"],
    { resource } = musicData;
  return (
    <MusicLayout data={musicData} query={query} activeTab="info">
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

      {resource.link && <LinkButtons data={resource.link} type="Music" />}

      {resource.link?.streaming?.youtube?.id && (
        <YoutubeAmbient videoId={resource.link.streaming.youtube.id} />
      )}

      {musicData.pulls.map((pull) => (
        <Box key={pull.id} mb={2}>
          <VoteCard
            data={pull}
            goodIconButtonProps={{ disabled: true }}
            badIconButtonProps={{ disabled: true }}
          />
        </Box>
      ))}

      {musicData.lyric && <Article text={musicData.lyric} />}

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
        transactions: P.when((transactions) => !isNonEmpty(transactions)),
      },
      () => (
        <CartLoadingButton
          disabled={isNonEmpty(data.carts)}
          loading={loading}
          onClick={onAddCart}
          fullWidth
        />
      )
    )
    .otherwise(({ id, score, user }) => (
      <ScoreButtonGroup
        watch={{
          route: { pathname: "/musics/[id]/score", query: { id } },
          buttonProps: { disabled: !score },
        }}
        edit={{
          route: { pathname: "/musics/[id]/score/edit", query: { id } },
          hidden: !(data.type === "ORIGINAL" && isSelf(session, { user })),
        }}
      />
    ));
};

export default Music;
