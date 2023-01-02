import { z } from 'zod';
import { ArtistCreateNestedOneWithoutParticipationsInputObjectSchema } from './ArtistCreateNestedOneWithoutParticipationsInput.schema';
import { MusicCreateNestedOneWithoutParticipationsInputObjectSchema } from './MusicCreateNestedOneWithoutParticipationsInput.schema';
import { RoleMapCreateNestedManyWithoutParticipationInputObjectSchema } from './RoleMapCreateNestedManyWithoutParticipationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateInput> = z
  .object({
    id: z.string().optional(),
    artist: z.lazy(
      () => ArtistCreateNestedOneWithoutParticipationsInputObjectSchema,
    ),
    music: z.lazy(
      () => MusicCreateNestedOneWithoutParticipationsInputObjectSchema,
    ),
    roleMap: z
      .lazy(() => RoleMapCreateNestedManyWithoutParticipationInputObjectSchema)
      .optional(),
  })
  .strict();

export const ParticipationCreateInputObjectSchema = Schema;
