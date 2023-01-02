import { z } from 'zod';
import { MusicCreateNestedOneWithoutParticipationsInputObjectSchema } from './MusicCreateNestedOneWithoutParticipationsInput.schema';
import { RoleMapCreateNestedManyWithoutParticipationInputObjectSchema } from './RoleMapCreateNestedManyWithoutParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateWithoutArtistInput> = z
  .object({
    id: z.string().optional(),
    music: z.lazy(
      () => MusicCreateNestedOneWithoutParticipationsInputObjectSchema,
    ),
    roleMap: z
      .lazy(() => RoleMapCreateNestedManyWithoutParticipationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParticipationCreateWithoutArtistInputObjectSchema = Schema;
