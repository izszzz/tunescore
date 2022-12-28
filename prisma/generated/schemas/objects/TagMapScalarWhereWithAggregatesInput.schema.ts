import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumTagTypeWithAggregatesFilterObjectSchema } from './EnumTagTypeWithAggregatesFilter.schema';
import { TagTypeSchema } from '../enums/TagType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagMapScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => TagMapScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagMapScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagMapScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => TagMapScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    tagId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    resourceId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumTagTypeWithAggregatesFilterObjectSchema),
        z.lazy(() => TagTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const TagMapScalarWhereWithAggregatesInputObjectSchema = Schema;
