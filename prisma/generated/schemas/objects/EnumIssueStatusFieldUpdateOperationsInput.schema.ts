import { z } from 'zod';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumIssueStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => IssueStatusSchema).optional(),
  })
  .strict();

export const EnumIssueStatusFieldUpdateOperationsInputObjectSchema = Schema;
