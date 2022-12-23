import { z } from 'zod';
import { IssueCreateWithoutCommentsInputObjectSchema } from './IssueCreateWithoutCommentsInput.schema';
import { IssueUncheckedCreateWithoutCommentsInputObjectSchema } from './IssueUncheckedCreateWithoutCommentsInput.schema';
import { IssueCreateOrConnectWithoutCommentsInputObjectSchema } from './IssueCreateOrConnectWithoutCommentsInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateNestedOneWithoutCommentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => IssueCreateWithoutCommentsInputObjectSchema),
        z.lazy(() => IssueUncheckedCreateWithoutCommentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => IssueCreateOrConnectWithoutCommentsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => IssueWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const IssueCreateNestedOneWithoutCommentsInputObjectSchema = Schema;
