import { z } from 'zod';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.StreamingLinkWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => StreamingLinkWhereInputObjectSchema),
        z.lazy(() => StreamingLinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => StreamingLinkWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => StreamingLinkWhereInputObjectSchema),
        z.lazy(() => StreamingLinkWhereInputObjectSchema).array(),
      ])
      .optional(),
    youtube: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    spotify: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    itunes: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const StreamingLinkWhereInputObjectSchema = Schema;
