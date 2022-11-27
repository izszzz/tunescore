import { z } from 'zod';
import { IssueWhereInputObjectSchema } from './IssueWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueListRelationFilter> = z
  .object({
    every: z.lazy(() => IssueWhereInputObjectSchema).optional(),
    some: z.lazy(() => IssueWhereInputObjectSchema).optional(),
    none: z.lazy(() => IssueWhereInputObjectSchema).optional(),
  })
  .strict();

export const IssueListRelationFilterObjectSchema = Schema;
