import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueUpdateWithoutUserInputObjectSchema } from './IssueUpdateWithoutUserInput.schema';
import { IssueUncheckedUpdateWithoutUserInputObjectSchema } from './IssueUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => IssueWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => IssueUpdateWithoutUserInputObjectSchema),
      z.lazy(() => IssueUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const IssueUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
