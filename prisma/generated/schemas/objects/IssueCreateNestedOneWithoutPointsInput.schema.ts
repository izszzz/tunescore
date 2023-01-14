import { z } from 'zod';
import { IssueCreateWithoutPointsInputObjectSchema } from './IssueCreateWithoutPointsInput.schema';
import { IssueUncheckedCreateWithoutPointsInputObjectSchema } from './IssueUncheckedCreateWithoutPointsInput.schema';
import { IssueCreateOrConnectWithoutPointsInputObjectSchema } from './IssueCreateOrConnectWithoutPointsInput.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateNestedOneWithoutPointsInput> = z
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
    connect: z.lazy(() => IssueWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const IssueCreateNestedOneWithoutPointsInputObjectSchema = Schema;
