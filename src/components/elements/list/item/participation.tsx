import { Box, Chip, Stack } from "@mui/material";
import type {
  ParticipatedArtist,
  ParticipatedMusic,
} from "../../../../helpers/participation";

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
