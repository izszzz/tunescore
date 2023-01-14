import { z } from 'zod';
import { IssueCreateWithoutPointsInputObjectSchema } from './IssueCreateWithoutPointsInput.schema';
import { IssueUncheckedCreateWithoutPointsInputObjectSchema } from './IssueUncheckedCreateWithoutPointsInput.schema';
import { IssueCreateOrConnectWithoutPointsInputObjectSchema } from './IssueCreateOrConnectWithoutPointsInput.schema';
import { IssueUpsertWithoutPointsInputObjectSchema } from './IssueUpsertWithoutPointsInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueUpdateWithoutPointsInputObjectSchema } from './IssueUpdateWithoutPointsInput.schema';
import { IssueUncheckedUpdateWithoutPointsInputObjectSchema } from './IssueUncheckedUpdateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateOneWithoutPointsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => IssueCreateWithoutPointsInputObjectSchema),
        z.lazy(() => IssueUncheckedCreateWithoutPointsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => IssueCreateOrConnectWithoutPointsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => IssueUpsertWithoutPointsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => IssueWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => IssueUpdateWithoutPointsInputObjectSchema),
        z.lazy(() => IssueUncheckedUpdateWithoutPointsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const IssueUpdateOneWithoutPointsNestedInputObjectSchema = Schema;
