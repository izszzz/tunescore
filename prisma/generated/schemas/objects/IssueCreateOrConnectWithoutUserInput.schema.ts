import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueCreateWithoutUserInputObjectSchema } from './IssueCreateWithoutUserInput.schema';
import { IssueUncheckedCreateWithoutUserInputObjectSchema } from './IssueUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => IssueWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => IssueCreateWithoutUserInputObjectSchema),
      z.lazy(() => IssueUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const IssueCreateOrConnectWithoutUserInputObjectSchema = Schema;
