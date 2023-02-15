import { albumListArgs } from "../../../helpers/album";
import { artistListArgs } from "../../../helpers/artist";
import { bandListArgs } from "../../../helpers/band";
import { musicListArgs } from "../../../helpers/music";
import type { SessionArg } from "../../../helpers/user";
import { userWhere } from "../../../helpers/user";
export const bookmarkQuery = (session: SessionArg) => ({
  args: {
    where: { user: userWhere(session) },
    include: {
      music: musicListArgs(session),
      band: bandListArgs(session),
      artist: artistListArgs(session),
      album: albumListArgs(session),
    },
  },
  options: { page: 0, perPage: 12 },
});
