import React from "react";
import { useRouter } from "next/router";
import { Prisma } from "@prisma/client";
import setLocale from "../../../../helpers/setLocale";
import MusicCard from ".";
import musicOwner from "../../../../helpers/musicOwner";
import Typography from "@mui/material/Typography";
import IndexChip from "../../chip";
import { selectSuitableStreamingImage } from "../../../../helpers/selectSuitableImage";

interface DefaultMusicCard {
  data: Prisma.MusicGetPayload<{
    include: {
      user: true;
      composers: true;
      lyrists: true;
      band: true;
      artists: true;
    };
  }>;
}
const DefaultMusicCard = ({ data }: DefaultMusicCard) => {
  const router = useRouter();
  const { type, owner } = musicOwner(data, router);
  return (
    <MusicCard
      size="200px"
      title={
        <>
          <Typography variant="h6">{setLocale(data.title, router)}</Typography>
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
