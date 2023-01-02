import { z } from 'zod';
import { MusicUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutParticipationsNestedInput.schema';
import { RoleMapUpdateManyWithoutParticipationNestedInputObjectSchema } from './RoleMapUpdateManyWithoutParticipationNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateWithoutArtistInput> = z
  .object({
    music: z
      .lazy(
        () =>
          MusicUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema,
      )
      .optional(),
    roleMap: z
      .lazy(() => RoleMapUpdateManyWithoutParticipationNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParticipationUpdateWithoutArtistInputObjectSchema = Schema;
