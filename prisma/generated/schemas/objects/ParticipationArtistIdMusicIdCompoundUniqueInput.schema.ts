import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationArtistIdMusicIdCompoundUniqueInput> =
  z
    .object({
      artistId: z.string(),
      musicId: z.string(),
    })
    .strict();

export const ParticipationArtistIdMusicIdCompoundUniqueInputObjectSchema =
  Schema;
