import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => IssueScalarWhereInputObjectSchema),
        z.lazy(() => IssueScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => IssueScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => IssueScalarWhereInputObjectSchema),
        z.lazy(() => IssueScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    musicId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const IssueScalarWhereInputObjectSchema = Schema;
