import React from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import musicOwner from "../../../../helpers/musicOwner";
import setLocale from "../../../../helpers/setLocale";
import IndexChip from "../../chip";
import { selectSuitableStreamingImage } from "../../../../helpers/selectSuitableImage";
import MusicCard from ".";
import type { Prisma } from "@prisma/client";
import Box from "@mui/material/Box";
import BookmarkToggleButton from "../../button/toggle/bookmark";
import { useSession } from "next-auth/react";

interface DefaultMusicCard {
  data: Prisma.MusicGetPayload<{
    include: {
      user: true;
      composers: true;
      lyrists: true;
      band: true;
      artists: true;
      bookmarks: true;
    };
  }>;
}
const DefaultMusicCard = ({ data }: DefaultMusicCard) => {
  const router = useRouter();
  const session = useSession();
  const { type, owner } = musicOwner(data, router);
  return (
    <MusicCard
      size="200px"
      title={
        <>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6" noWrap>
              {setLocale(data.title, router)}
            </Typography>
            <BookmarkToggleButton value={!!data.bookmarks.length} />
          </Box>
          {owner && <IndexChip label={owner.name} resource={type} />}
        </>
      }
      image={
        data.link?.streaming
          ? selectSuitableStreamingImage(data.link.streaming)?.image?.size
              ?.large
          : null
      }
      onClick={() =>
        router.push({ pathname: "/musics/[id]", query: { id: data.id } })
      }
    />
  );
};

export default DefaultMusicCard;
