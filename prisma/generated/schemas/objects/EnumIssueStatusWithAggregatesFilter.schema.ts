import { z } from 'zod';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { NestedEnumIssueStatusWithAggregatesFilterObjectSchema } from './NestedEnumIssueStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumIssueStatusFilterObjectSchema } from './NestedEnumIssueStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumIssueStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => IssueStatusSchema).optional(),
    in: z
      .lazy(() => IssueStatusSchema)
      .array()
      .optional(),
    notIn: z
      .lazy(() => IssueStatusSchema)
      .array()
      .optional(),
    not: z
      .union([
        z.lazy(() => IssueStatusSchema),
        z.lazy(() => NestedEnumIssueStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumIssueStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumIssueStatusFilterObjectSchema).optional(),
  })
  .strict();

export const EnumIssueStatusWithAggregatesFilterObjectSchema = Schema;
