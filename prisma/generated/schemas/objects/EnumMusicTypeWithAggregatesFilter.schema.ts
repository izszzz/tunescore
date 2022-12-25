import { z } from 'zod';
import { MusicTypeSchema } from '../enums/MusicType.schema';
import { NestedEnumMusicTypeWithAggregatesFilterObjectSchema } from './NestedEnumMusicTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumMusicTypeFilterObjectSchema } from './NestedEnumMusicTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumMusicTypeWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumMusicTypeWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumMusicTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumMusicTypeFilterObjectSchema).optional(),
  })
  .strict();

export const EnumMusicTypeWithAggregatesFilterObjectSchema = Schema;
