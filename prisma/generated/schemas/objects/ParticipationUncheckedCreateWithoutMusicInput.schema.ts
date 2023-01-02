import { z } from 'zod';
import { RoleMapUncheckedCreateNestedManyWithoutParticipationInputObjectSchema } from './RoleMapUncheckedCreateNestedManyWithoutParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUncheckedCreateWithoutMusicInput> =
  z
    .object({
      id: z.string().optional(),
      artistId: z.string(),
      roleMap: z
        .lazy(
          () =>
            RoleMapUncheckedCreateNestedManyWithoutParticipationInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ParticipationUncheckedCreateWithoutMusicInputObjectSchema = Schema;
