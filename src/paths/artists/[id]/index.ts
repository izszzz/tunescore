import { Prisma } from "@prisma/client";

import { bandListArgs } from "../../../helpers/band";
import { participatedMusicArgs } from "../../../helpers/participation";
import type { SessionArg } from "../../../helpers/user";

export const artistShowArgs = (session: SessionArg) =>
  Prisma.validator<Prisma.ArtistArgs>()({
    include: {
      bands: bandListArgs(session),
      participations: participatedMusicArgs(session),
    },
  });
