import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueCreateWithoutPointsInputObjectSchema } from './IssueCreateWithoutPointsInput.schema';
import { IssueUncheckedCreateWithoutPointsInputObjectSchema } from './IssueUncheckedCreateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateOrConnectWithoutPointsInput> = z
  .object({
    where: z.lazy(() => IssueWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => IssueCreateWithoutPointsInputObjectSchema),
      z.lazy(() => IssueUncheckedCreateWithoutPointsInputObjectSchema),
    ]),
  })
  .strict();

export const IssueCreateOrConnectWithoutPointsInputObjectSchema = Schema;
