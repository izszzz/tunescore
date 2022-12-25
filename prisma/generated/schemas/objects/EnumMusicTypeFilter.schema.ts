import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { NestedEnumMusicTypeFilterObjectSchema } from './NestedEnumMusicTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumMusicTypeFilter> = z
  .object({
    equals: z.lazy(() => MusicTypeSchema).optional(),
    in: z
      .lazy(() => MusicTypeSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => MusicTypeSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => MusicTypeSchema),
        z.lazy(() => NestedEnumMusicTypeFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumMusicTypeFilterObjectSchema = Schema;
