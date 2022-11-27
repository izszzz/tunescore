import { z } from 'zod';
import { MusicCreateWithoutIssuesInputObjectSchema } from './MusicCreateWithoutIssuesInput.schema';
import { MusicUncheckedCreateWithoutIssuesInputObjectSchema } from './MusicUncheckedCreateWithoutIssuesInput.schema';
import { MusicCreateOrConnectWithoutIssuesInputObjectSchema } from './MusicCreateOrConnectWithoutIssuesInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutIssuesInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutIssuesInputObjectSchema),
            z.lazy(() => MusicUncheckedCreateWithoutIssuesInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => MusicCreateOrConnectWithoutIssuesInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const MusicCreateNestedOneWithoutIssuesInputObjectSchema = Schema;
