import { z } from 'zod';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueUpdateWithoutMusicInputObjectSchema } from './IssueUpdateWithoutMusicInput.schema';
import { IssueUncheckedUpdateWithoutMusicInputObjectSchema } from './IssueUncheckedUpdateWithoutMusicInput.schema';
import { IssueCreateWithoutMusicInputObjectSchema } from './IssueCreateWithoutMusicInput.schema';
import { IssueUncheckedCreateWithoutMusicInputObjectSchema } from './IssueUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpsertWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => IssueWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => IssueUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => IssueUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => IssueCreateWithoutMusicInputObjectSchema),
      z.lazy(() => IssueUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const IssueUpsertWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
