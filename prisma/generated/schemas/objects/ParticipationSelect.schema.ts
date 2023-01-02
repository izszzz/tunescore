import { z } from 'zod';
import { ArtistArgsObjectSchema } from './ArtistArgs.schema';
import { MusicArgsObjectSchema } from './MusicArgs.schema';
import { RoleMapFindManySchema } from '../findManyRoleMap.schema';
import { ParticipationCountOutputTypeArgsObjectSchema } from './ParticipationCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ParticipationSelect> = z
  .object({
    id: z.boolean().optional(),
    artist: z
      .union([z.boolean(), z.lazy(() => ArtistArgsObjectSchema)])
      .optional(),
    artistId: z.boolean().optional(),
    music: z
      .union([z.boolean(), z.lazy(() => MusicArgsObjectSchema)])
      .optional(),
    musicId: z.boolean().optional(),
    roleMap: z
      .union([z.boolean(), z.lazy(() => RoleMapFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => ParticipationCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const ParticipationSelectObjectSchema = Schema;
