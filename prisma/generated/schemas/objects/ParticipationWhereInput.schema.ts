import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { ArtistRelationFilterObjectSchema } from './ArtistRelationFilter.schema';
import { ArtistWhereInputObjectSchema } from './ArtistWhereInput.schema';
import { MusicRelationFilterObjectSchema } from './MusicRelationFilter.schema';
import { MusicWhereInputObjectSchema } from './MusicWhereInput.schema';
import { RoleMapListRelationFilterObjectSchema } from './RoleMapListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ParticipationWhereInputObjectSchema),
        z.lazy(() => ParticipationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ParticipationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ParticipationWhereInputObjectSchema),
        z.lazy(() => ParticipationWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    artist: z
      .union([
        z.lazy(() => ArtistRelationFilterObjectSchema),
        z.lazy(() => ArtistWhereInputObjectSchema),
      ])
      .optional(),
    artistId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    music: z
      .union([
        z.lazy(() => MusicRelationFilterObjectSchema),
        z.lazy(() => MusicWhereInputObjectSchema),
      ])
      .optional(),
    musicId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    roleMap: z.lazy(() => RoleMapListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const ParticipationWhereInputObjectSchema = Schema;
