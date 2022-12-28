import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EnumTagTypeFilterObjectSchema } from './EnumTagTypeFilter.schema';
import { TagTypeSchema } from '../enums/TagType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TagMapScalarWhereInputObjectSchema),
        z.lazy(() => TagMapScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TagMapScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TagMapScalarWhereInputObjectSchema),
        z.lazy(() => TagMapScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    tagId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    resourceType: z
      .union([
        z.lazy(() => EnumTagTypeFilterObjectSchema),
        z.lazy(() => TagTypeSchema),
      ])
      .optional(),
  })
  .strict();

export const TagMapScalarWhereInputObjectSchema = Schema;
