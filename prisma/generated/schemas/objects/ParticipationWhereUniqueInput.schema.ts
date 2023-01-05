import { z } from 'zod';
import { ParticipationArtistIdMusicIdCompoundUniqueInputObjectSchema } from './ParticipationArtistIdMusicIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    artistId_musicId: z
      .lazy(() => ParticipationArtistIdMusicIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParticipationWhereUniqueInputObjectSchema = Schema;
