import { z } from 'zod';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { NestedEnumIssueStatusFilterObjectSchema } from './NestedEnumIssueStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumIssueStatusFilter> = z
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
        z.lazy(() => NestedEnumIssueStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumIssueStatusFilterObjectSchema = Schema;
