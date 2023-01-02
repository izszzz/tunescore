import { z } from 'zod';
import { ArtistCreateNestedOneWithoutParticipationsInputObjectSchema } from './ArtistCreateNestedOneWithoutParticipationsInput.schema';
import { MusicCreateNestedOneWithoutParticipationsInputObjectSchema } from './MusicCreateNestedOneWithoutParticipationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationCreateWithoutRoleMapInput> = z
  .object({
    id: z.string().optional(),
    artist: z.lazy(
      () => ArtistCreateNestedOneWithoutParticipationsInputObjectSchema,
    ),
    music: z.lazy(
      () => MusicCreateNestedOneWithoutParticipationsInputObjectSchema,
    ),
  })
  .strict();

export const ParticipationCreateWithoutRoleMapInputObjectSchema = Schema;
