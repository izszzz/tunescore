import { Box, Chip } from "@mui/material";
import type { Prisma } from "@prisma/client";
export type ParticipatedArtist = Prisma.ParticipationGetPayload<{
  include: {
    artist: {
      include: {
        bands: true;
        _count: {
          select: {
            bookmarks: true;
          };
        };
      };
    };
    roleMap: { include: { role: true } };
  };
}>;
export type ParticipatedMusic = Prisma.ParticipationGetPayload<{
  include: {
    music: {
      include: {
        user: true;
        band: true;
        participations: {
          include: { artist: true; roleMap: { include: { role: true } } };
        };
        bookmarks: true;
        _count: {
          select: {
            bookmarks: true;
          };
        };
      };
    };
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
