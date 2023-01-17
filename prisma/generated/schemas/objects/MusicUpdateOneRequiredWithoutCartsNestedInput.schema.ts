import { z } from 'zod';
import { MusicCreateWithoutCartsInputObjectSchema } from './MusicCreateWithoutCartsInput.schema';
import { MusicUncheckedCreateWithoutCartsInputObjectSchema } from './MusicUncheckedCreateWithoutCartsInput.schema';
import { MusicCreateOrConnectWithoutCartsInputObjectSchema } from './MusicCreateOrConnectWithoutCartsInput.schema';
import { MusicUpsertWithoutCartsInputObjectSchema } from './MusicUpsertWithoutCartsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutCartsInputObjectSchema } from './MusicUpdateWithoutCartsInput.schema';
import { MusicUncheckedUpdateWithoutCartsInputObjectSchema } from './MusicUncheckedUpdateWithoutCartsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateOneRequiredWithoutCartsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MusicCreateWithoutCartsInputObjectSchema),
          z.lazy(() => MusicUncheckedCreateWithoutCartsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => MusicCreateOrConnectWithoutCartsInputObjectSchema)
        .optional(),
      upsert: z.lazy(() => MusicUpsertWithoutCartsInputObjectSchema).optional(),
      connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => MusicUpdateWithoutCartsInputObjectSchema),
          z.lazy(() => MusicUncheckedUpdateWithoutCartsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const MusicUpdateOneRequiredWithoutCartsNestedInputObjectSchema = Schema;
