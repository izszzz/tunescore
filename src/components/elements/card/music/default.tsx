import React from "react";
import { useRouter } from "next/router";
import { Prisma } from "@prisma/client";
import setLocale from "../../../../utils/setLocale";
import MusicCard from ".";
import musicOwner from "../../../../utils/musicOwner";
import Typography from "@mui/material/Typography";
import IndexChip from "../../chip";

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
  return (
    <MusicCard
      size="200px"
      title={
        <>
          <Typography variant="h6">{setLocale(data.title, router)}</Typography>
          <Chip data={data} />
        </>
      }
      image={data.image}
      onClick={() =>
        router.push({ pathname: "/musics/[id]", query: { id: data.id } })
      }
    />
  );
};

const Chip = ({ data }: DefaultMusicCard) => {
  const router = useRouter();
  const { type, owner } = musicOwner(data, router);
  if (type === "none" || owner === null) return <></>;
  if (type === "composer" || type === "lyrist" || type === "artist")
    return <IndexChip label={owner.name} resource="artist" />;
  return <IndexChip label={owner.name} resource={type} />;
};

export default DefaultMusicCard;
