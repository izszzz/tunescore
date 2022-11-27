import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueUpdateWithoutMusicInputObjectSchema } from './IssueUpdateWithoutMusicInput.schema';
import { IssueUncheckedUpdateWithoutMusicInputObjectSchema } from './IssueUncheckedUpdateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => IssueWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => IssueUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => IssueUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const IssueUpdateWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
