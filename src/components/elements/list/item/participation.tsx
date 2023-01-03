import { Box, Chip } from "@mui/material";
import type { MusicListQueryType } from "../../../../helpers/music";
import type { ArtistListQueryType } from "../../../../helpers/artist";
import type { Prisma } from "@prisma/client";
export type ParticipatedArtist = Prisma.ParticipationGetPayload<{
  include: {
    artist: ArtistListQueryType;
    roleMap: { include: { role: true } };
  };
}>;
export type ParticipatedMusic = Prisma.ParticipationGetPayload<{
  include: {
    music: MusicListQueryType;
    roleMap: { include: { role: true } };
  };
}>;
export interface ParticipationListItemProps<
  T extends ParticipatedArtist | ParticipatedMusic
> {
  data: T;
  children: (data: ParticipationListItemProps<T>["data"]) => React.ReactNode;
}
function ParticipationListItem<
  T extends ParticipatedArtist | ParticipatedMusic
>({ data, children }: ParticipationListItemProps<T>) {
  return (
    <Box display="flex">
      {children(data)}
      <Box display="flex" alignItems="center">
        {data.roleMap.map((roleMap) => (
          <Chip key={roleMap.id} label={roleMap.role.name} />
        ))}
      </Box>
    </Box>
  );
}

export default ParticipationListItem;
