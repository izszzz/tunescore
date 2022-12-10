import { z } from 'zod';
import { MusicCreateWithoutIssuesInputObjectSchema } from './MusicCreateWithoutIssuesInput.schema';
import { MusicUncheckedCreateWithoutIssuesInputObjectSchema } from './MusicUncheckedCreateWithoutIssuesInput.schema';
import { MusicCreateOrConnectWithoutIssuesInputObjectSchema } from './MusicCreateOrConnectWithoutIssuesInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutIssuesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => MusicCreateWithoutIssuesInputObjectSchema),
        z.lazy(() => MusicUncheckedCreateWithoutIssuesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => MusicCreateOrConnectWithoutIssuesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MusicCreateNestedOneWithoutIssuesInputObjectSchema = Schema;
