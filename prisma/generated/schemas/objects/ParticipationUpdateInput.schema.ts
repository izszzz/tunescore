import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutParticipationsNestedInput.schema';
import { MusicUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutParticipationsNestedInput.schema';
import { RoleMapUpdateManyWithoutParticipationNestedInputObjectSchema } from './RoleMapUpdateManyWithoutParticipationNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateInput> = z
  .object({
    artist: z
      .lazy(
        () =>
          ArtistUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema,
      )
      .optional(),
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

export const ParticipationUpdateInputObjectSchema = Schema;
