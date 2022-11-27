import { z } from 'zod';
import { MusicCreateWithoutPullsInputObjectSchema } from './MusicCreateWithoutPullsInput.schema';
import { MusicUncheckedCreateWithoutPullsInputObjectSchema } from './MusicUncheckedCreateWithoutPullsInput.schema';
import { MusicCreateOrConnectWithoutPullsInputObjectSchema } from './MusicCreateOrConnectWithoutPullsInput.schema';
import { MusicUpsertWithoutPullsInputObjectSchema } from './MusicUpsertWithoutPullsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutPullsInputObjectSchema } from './MusicUpdateWithoutPullsInput.schema';
import { MusicUncheckedUpdateWithoutPullsInputObjectSchema } from './MusicUncheckedUpdateWithoutPullsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateOneRequiredWithoutPullsNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MusicCreateWithoutPullsInputObjectSchema),
            z.lazy(() => MusicUncheckedCreateWithoutPullsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => MusicCreateOrConnectWithoutPullsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => MusicUpsertWithoutPullsInputObjectSchema)
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
            z.lazy(() => MusicUpdateWithoutPullsInputObjectSchema),
            z.lazy(() => MusicUncheckedUpdateWithoutPullsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MusicUpdateOneRequiredWithoutPullsNestedInputObjectSchema = Schema;
