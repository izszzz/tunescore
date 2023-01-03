import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumIssueStatusWithAggregatesFilterObjectSchema } from './EnumIssueStatusWithAggregatesFilter.schema';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => IssueScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => IssueScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => IssueScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => IssueScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => IssueScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    body: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    status: z
      .union([
        z.lazy(() => EnumIssueStatusWithAggregatesFilterObjectSchema),
        z.lazy(() => IssueStatusSchema),
      ])
      .optional(),
    musicId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
    userId: z
      .union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const IssueScalarWhereWithAggregatesInputObjectSchema = Schema;
