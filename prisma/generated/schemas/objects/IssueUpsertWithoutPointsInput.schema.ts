import { z } from 'zod';
import { IssueUpdateWithoutPointsInputObjectSchema } from './IssueUpdateWithoutPointsInput.schema';
import { IssueUncheckedUpdateWithoutPointsInputObjectSchema } from './IssueUncheckedUpdateWithoutPointsInput.schema';
import { IssueCreateWithoutPointsInputObjectSchema } from './IssueCreateWithoutPointsInput.schema';
import { IssueUncheckedCreateWithoutPointsInputObjectSchema } from './IssueUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpsertWithoutPointsInput> = z
  .object({
    update: z.union([
      z.lazy(() => IssueUpdateWithoutPointsInputObjectSchema),
      z.lazy(() => IssueUncheckedUpdateWithoutPointsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => IssueCreateWithoutPointsInputObjectSchema),
      z.lazy(() => IssueUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const IssueUpsertWithoutPointsInputObjectSchema = Schema;
