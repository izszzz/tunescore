import { z } from 'zod';
import { IssueUpdateWithoutCommentsInputObjectSchema } from './IssueUpdateWithoutCommentsInput.schema';
import { IssueUncheckedUpdateWithoutCommentsInputObjectSchema } from './IssueUncheckedUpdateWithoutCommentsInput.schema';
import { IssueCreateWithoutCommentsInputObjectSchema } from './IssueCreateWithoutCommentsInput.schema';
import { IssueUncheckedCreateWithoutCommentsInputObjectSchema } from './IssueUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpsertWithoutCommentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => IssueUpdateWithoutCommentsInputObjectSchema),
      z.lazy(() => IssueUncheckedUpdateWithoutCommentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => IssueCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => IssueUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const IssueUpsertWithoutCommentsInputObjectSchema = Schema;
