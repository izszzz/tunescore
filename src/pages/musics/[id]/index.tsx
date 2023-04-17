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
import ResourceListItem from "../../../components/elements/list/item/resource";
import ParticipationLists from "../../../components/elements/list/participation";
import ResourceLists from "../../../components/elements/list/resource";
import YoutubeAmbient from "../../../components/elements/youtube/ambient";
import type { ResourceData } from "../../../components/layouts/show/resource";
import ResourceShowLayout from "../../../components/layouts/show/resource";
import { findLinkYoutube } from "../../../helpers/link";
import {
  resourceMusicShowQuery,
  resourceShowQuery,
} from "../../../helpers/resource";
import { getCurrentUserId, isSelf } from "../../../helpers/user";
import { trpc } from "../../../utils/trpc";

const Music: NextPage = () => {
  const router = useRouter<"/musics/[id]">(),
    queryClient = useQueryClient(),
    { data: session } = useSession(),
    query = resourceShowQuery({ router, session }),
    { enqueueSnackbar } = useSnackbar(),
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
  return (
    <ResourceShowLayout activeTab="info" getQuery={resourceMusicShowQuery}>
      {(data) => {
        const { music } = data,
          youtube = findLinkYoutube(data.links);
        return (
          <>
            <Box mb={2}>
              <ActionButton
                data={data}
                loading={create.isLoading}
                onAddCart={() =>
                  create.mutate({
                    data: {
                      user: { connect: { id: getCurrentUserId(session) } },
                      music: { connect: { id: music?.id } },
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

            {music?.band && (
              <ResourceLists
                data={[{ ...music.band.resource, band: music.band }]}
              />
            )}
            <ParticipationLists data={music?.participations ?? []}>
              {(participation, data) => (
                <ResourceListItem
                  data={{ ...data.artist.resource, artist: data.artist }}
                >
                  {participation}
                </ResourceListItem>
              )}
            </ParticipationLists>
            <ResourceLists
              data={
                music?.albums.map(({ resource, ...album }) => ({
                  ...resource,
                  album,
                })) ?? []
              }
            />
          </>
        );
      }}
    </ResourceShowLayout>
  );
};

interface ActionButtonProps {
  data: ResourceData;
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
