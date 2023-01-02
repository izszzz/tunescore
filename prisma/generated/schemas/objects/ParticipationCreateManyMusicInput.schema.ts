import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateManyMusicInput> = z
  .object({
    id: z.string().optional(),
    artistId: z.string(),
  })
  .strict();

export const ParticipationCreateManyMusicInputObjectSchema = Schema;
