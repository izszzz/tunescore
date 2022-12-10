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
  z
    .object({
      create: z
        .union([
          z.lazy(() => MusicCreateWithoutPullsInputObjectSchema),
          z.lazy(() => MusicUncheckedCreateWithoutPullsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MusicCreateOrConnectWithoutPullsInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => MusicUpsertWithoutPullsInputObjectSchema).optional(),
      connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MusicUpdateWithoutPullsInputObjectSchema),
          z.lazy(() => MusicUncheckedUpdateWithoutPullsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MusicUpdateOneRequiredWithoutPullsNestedInputObjectSchema = Schema;
