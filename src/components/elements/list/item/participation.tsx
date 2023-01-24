import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
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
}
function ParticipationListItem<
  T extends Prisma.ParticipationGetPayload<
    ParticipatedMusicArgs | ParticipatedArtistArgs
  >
>({ data }: ParticipationListItemProps<T>) {
  return (
    <Stack direction="row" spacing={1}>
      {data.roleMap.map((roleMap) => (
        <Chip key={roleMap.id} label={roleMap.role.name} />
      ))}
    </Stack>
  );
}

export default ParticipationListItem;
