import { z } from 'zod';
import { MusicCreateWithoutCartsInputObjectSchema } from './MusicCreateWithoutCartsInput.schema';
import { MusicUncheckedCreateWithoutCartsInputObjectSchema } from './MusicUncheckedCreateWithoutCartsInput.schema';
import { MusicCreateOrConnectWithoutCartsInputObjectSchema } from './MusicCreateOrConnectWithoutCartsInput.schema';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicCreateNestedOneWithoutCartsInput> = z
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
    connect: z.lazy(() => MusicWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const MusicCreateNestedOneWithoutCartsInputObjectSchema = Schema;
