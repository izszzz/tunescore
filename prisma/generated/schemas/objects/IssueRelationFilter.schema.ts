import { z } from 'zod';
import { IssueWhereInputObjectSchema } from './IssueWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueRelationFilter> = z
  .object({
    is: z
      .lazy(() => IssueWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => IssueWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const IssueRelationFilterObjectSchema = Schema;
