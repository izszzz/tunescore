import { z } from 'zod';
import { IssueCreateWithoutCommentsInputObjectSchema } from './IssueCreateWithoutCommentsInput.schema';
import { IssueUncheckedCreateWithoutCommentsInputObjectSchema } from './IssueUncheckedCreateWithoutCommentsInput.schema';
import { IssueCreateOrConnectWithoutCommentsInputObjectSchema } from './IssueCreateOrConnectWithoutCommentsInput.schema';
import { IssueUpsertWithoutCommentsInputObjectSchema } from './IssueUpsertWithoutCommentsInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueUpdateWithoutCommentsInputObjectSchema } from './IssueUpdateWithoutCommentsInput.schema';
import { IssueUncheckedUpdateWithoutCommentsInputObjectSchema } from './IssueUncheckedUpdateWithoutCommentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateOneWithoutCommentsNestedInput> = z
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
    upsert: z
      .lazy(() => IssueUpsertWithoutCommentsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => IssueWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => IssueUpdateWithoutCommentsInputObjectSchema),
        z.lazy(() => IssueUncheckedUpdateWithoutCommentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const IssueUpdateOneWithoutCommentsNestedInputObjectSchema = Schema;
