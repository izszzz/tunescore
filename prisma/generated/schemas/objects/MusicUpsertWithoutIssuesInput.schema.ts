import { z } from 'zod';
import { MusicUpdateWithoutIssuesInputObjectSchema } from './MusicUpdateWithoutIssuesInput.schema';
import { MusicUncheckedUpdateWithoutIssuesInputObjectSchema } from './MusicUncheckedUpdateWithoutIssuesInput.schema';
import { MusicCreateWithoutIssuesInputObjectSchema } from './MusicCreateWithoutIssuesInput.schema';
import { MusicUncheckedCreateWithoutIssuesInputObjectSchema } from './MusicUncheckedCreateWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpsertWithoutIssuesInput> = z
  .object({
    update: z.union([
      z.lazy(() => MusicUpdateWithoutIssuesInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutIssuesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => MusicCreateWithoutIssuesInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutIssuesInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpsertWithoutIssuesInputObjectSchema = Schema;
