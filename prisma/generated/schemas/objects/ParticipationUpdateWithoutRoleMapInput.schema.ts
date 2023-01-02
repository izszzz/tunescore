import { z } from 'zod';
import { ArtistUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './ArtistUpdateOneRequiredWithoutParticipationsNestedInput.schema';
import { MusicUpdateOneRequiredWithoutParticipationsNestedInputObjectSchema } from './MusicUpdateOneRequiredWithoutParticipationsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationUpdateWithoutRoleMapInput> = z
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
  })
  .strict();

export const ParticipationUpdateWithoutRoleMapInputObjectSchema = Schema;
