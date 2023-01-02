import { z } from 'zod';
import { RoleMapUncheckedCreateNestedManyWithoutParticipationInputObjectSchema } from './RoleMapUncheckedCreateNestedManyWithoutParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUncheckedCreateWithoutArtistInput> =
  z
    .object({
      id: z.string().optional(),
      musicId: z.string(),
      roleMap: z
        .lazy(
          () =>
            RoleMapUncheckedCreateNestedManyWithoutParticipationInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const ParticipationUncheckedCreateWithoutArtistInputObjectSchema =
  Schema;
