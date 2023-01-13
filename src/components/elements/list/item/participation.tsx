import { Box, Chip, Stack } from "@mui/material";
import type { Prisma } from "@prisma/client";
import type {
  ParticipatedArtistArgs,
  ParticipatedMusicArgs,
} from "../../../../helpers/participation";

export interface ParticipationListItemProps<
  T extends Prisma.ParticipationGetPayload<
    ParticipatedMusicArgs | ParticipatedArtistArgs
  >
> {
  data: T;
  children: (data: ParticipationListItemProps<T>["data"]) => React.ReactNode;
}
function ParticipationListItem<
  T extends Prisma.ParticipationGetPayload<
    ParticipatedMusicArgs | ParticipatedArtistArgs
  >
>({ data, children }: ParticipationListItemProps<T>) {
  return (
    <Box display="flex" alignItems="center">
      {children(data)}
      <Stack direction="row" spacing={1}>
        {data.roleMap.map((roleMap) => (
          <Chip key={roleMap.id} label={roleMap.role.name} />
        ))}
      </Stack>
    </Box>
  );
}

export default ParticipationListItem;
