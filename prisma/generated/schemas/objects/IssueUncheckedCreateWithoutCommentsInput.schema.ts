import { z } from 'zod';
import { IssueStatusSchema } from '../enums/IssueStatus.schema';
import { PointUncheckedCreateNestedManyWithoutIssueInputObjectSchema } from './PointUncheckedCreateNestedManyWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUncheckedCreateWithoutCommentsInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    body: z.string(),
    status: z.lazy(() => IssueStatusSchema).optional(),
    points: z
      .lazy(() => PointUncheckedCreateNestedManyWithoutIssueInputObjectSchema)
      .optional(),
    musicId: z.string(),
    userId: z.string(),
  })
  .strict();

export const IssueUncheckedCreateWithoutCommentsInputObjectSchema = Schema;
