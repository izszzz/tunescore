import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueCreateWithoutCommentsInputObjectSchema } from './IssueCreateWithoutCommentsInput.schema';
import { IssueUncheckedCreateWithoutCommentsInputObjectSchema } from './IssueUncheckedCreateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateOrConnectWithoutCommentsInput> = z
  .object({
    where: z.lazy(() => IssueWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => IssueCreateWithoutCommentsInputObjectSchema),
      z.lazy(() => IssueUncheckedCreateWithoutCommentsInputObjectSchema),
    ]),
  })
  .strict();

export const IssueCreateOrConnectWithoutCommentsInputObjectSchema = Schema;
