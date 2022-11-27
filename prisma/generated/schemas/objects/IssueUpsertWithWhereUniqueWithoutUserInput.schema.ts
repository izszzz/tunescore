import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueUpdateWithoutUserInputObjectSchema } from './IssueUpdateWithoutUserInput.schema';
import { IssueUncheckedUpdateWithoutUserInputObjectSchema } from './IssueUncheckedUpdateWithoutUserInput.schema';
import { IssueCreateWithoutUserInputObjectSchema } from './IssueCreateWithoutUserInput.schema';
import { IssueUncheckedCreateWithoutUserInputObjectSchema } from './IssueUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => IssueWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => IssueUpdateWithoutUserInputObjectSchema),
      z.lazy(() => IssueUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => IssueCreateWithoutUserInputObjectSchema),
      z.lazy(() => IssueUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const IssueUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
