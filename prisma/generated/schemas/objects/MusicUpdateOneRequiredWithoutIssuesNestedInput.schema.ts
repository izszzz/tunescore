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
        upsert: z
          .lazy(() => MusicUpsertWithoutIssuesInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => MusicUpdateWithoutIssuesInputObjectSchema),
            z.lazy(() => MusicUncheckedUpdateWithoutIssuesInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MusicUpdateOneRequiredWithoutIssuesNestedInputObjectSchema =
  Schema;
