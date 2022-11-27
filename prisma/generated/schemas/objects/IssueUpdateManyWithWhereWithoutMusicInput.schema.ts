import { z } from 'zod';
import { IssueScalarWhereInputObjectSchema } from './IssueScalarWhereInput.schema';
import { IssueUpdateManyMutationInputObjectSchema } from './IssueUpdateManyMutationInput.schema';
import { IssueUncheckedUpdateManyWithoutIssuesInputObjectSchema } from './IssueUncheckedUpdateManyWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateManyWithWhereWithoutMusicInput> = z
  .object({
    where: z.lazy(() => IssueScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => IssueUpdateManyMutationInputObjectSchema),
      z.lazy(() => IssueUncheckedUpdateManyWithoutIssuesInputObjectSchema),
    ]),
  })
  .strict();

export const IssueUpdateManyWithWhereWithoutMusicInputObjectSchema = Schema;
