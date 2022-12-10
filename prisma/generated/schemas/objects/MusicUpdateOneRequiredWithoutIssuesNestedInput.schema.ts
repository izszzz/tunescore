import { z } from 'zod';
import { MusicCreateWithoutIssuesInputObjectSchema } from './MusicCreateWithoutIssuesInput.schema';
import { MusicUncheckedCreateWithoutIssuesInputObjectSchema } from './MusicUncheckedCreateWithoutIssuesInput.schema';
import { MusicCreateOrConnectWithoutIssuesInputObjectSchema } from './MusicCreateOrConnectWithoutIssuesInput.schema';
import { MusicUpsertWithoutIssuesInputObjectSchema } from './MusicUpsertWithoutIssuesInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutIssuesInputObjectSchema } from './MusicUpdateWithoutIssuesInput.schema';
import { MusicUncheckedUpdateWithoutIssuesInputObjectSchema } from './MusicUncheckedUpdateWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateOneRequiredWithoutIssuesNestedInput> =
  z
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
      upsert: z
        .lazy(() => MusicUpsertWithoutIssuesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MusicUpdateWithoutIssuesInputObjectSchema),
          z.lazy(() => MusicUncheckedUpdateWithoutIssuesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MusicUpdateOneRequiredWithoutIssuesNestedInputObjectSchema =
  Schema;
