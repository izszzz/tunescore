import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutParticipationsNestedInput.schema';
import { RoleMapUpdateManyWithoutParticipationNestedInputObjectSchema } from './RoleMapUpdateManyWithoutParticipationNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateWithoutMusicInput> = z
  .object({
    artist: z
      .lazy(
        () =>
          ArtistUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema,
      )
      .optional(),
    roleMap: z
      .lazy(() => RoleMapUpdateManyWithoutParticipationNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParticipationUpdateWithoutMusicInputObjectSchema = Schema;
