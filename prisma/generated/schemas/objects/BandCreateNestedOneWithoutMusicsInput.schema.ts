import { z } from 'zod';
import { BandCreateWithoutMusicsInputObjectSchema } from './BandCreateWithoutMusicsInput.schema';
import { BandUncheckedCreateWithoutMusicsInputObjectSchema } from './BandUncheckedCreateWithoutMusicsInput.schema';
import { BandCreateOrConnectWithoutMusicsInputObjectSchema } from './BandCreateOrConnectWithoutMusicsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateNestedOneWithoutMusicsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BandCreateWithoutMusicsInputObjectSchema),
        z.lazy(() => BandUncheckedCreateWithoutMusicsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BandCreateOrConnectWithoutMusicsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BandCreateNestedOneWithoutMusicsInputObjectSchema = Schema;
