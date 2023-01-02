import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUncheckedCreateWithoutRoleMapInput> =
  z
    .object({
      id: z.string().optional(),
      artistId: z.string(),
      musicId: z.string(),
    })
    .strict();

export const ParticipationUncheckedCreateWithoutRoleMapInputObjectSchema =
  Schema;
