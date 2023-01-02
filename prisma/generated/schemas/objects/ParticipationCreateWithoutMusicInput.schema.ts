import { z } from 'zod';
import { ArtistCreateNestedOneWithoutParticipationsInputObjectSchema } from './ArtistCreateNestedOneWithoutParticipationsInput.schema';
import { RoleMapCreateNestedManyWithoutParticipationInputObjectSchema } from './RoleMapCreateNestedManyWithoutParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateWithoutMusicInput> = z
  .object({
    id: z.string().optional(),
    artist: z.lazy(
      () => ArtistCreateNestedOneWithoutParticipationsInputObjectSchema,
    ),
    roleMap: z
      .lazy(() => RoleMapCreateNestedManyWithoutParticipationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParticipationCreateWithoutMusicInputObjectSchema = Schema;
