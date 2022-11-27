import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicCreateWithoutIssuesInputObjectSchema } from './MusicCreateWithoutIssuesInput.schema';
import { MusicUncheckedCreateWithoutIssuesInputObjectSchema } from './MusicUncheckedCreateWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateOrConnectWithoutIssuesInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => MusicCreateWithoutIssuesInputObjectSchema),
      z.lazy(() => MusicUncheckedCreateWithoutIssuesInputObjectSchema),
    ]),
  })
  .strict();

export const MusicCreateOrConnectWithoutIssuesInputObjectSchema = Schema;
