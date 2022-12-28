import { z } from 'zod';
import { BandCreateWithoutTagMapsInputObjectSchema } from './BandCreateWithoutTagMapsInput.schema';
import { BandUncheckedCreateWithoutTagMapsInputObjectSchema } from './BandUncheckedCreateWithoutTagMapsInput.schema';
import { BandCreateOrConnectWithoutTagMapsInputObjectSchema } from './BandCreateOrConnectWithoutTagMapsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateNestedOneWithoutTagMapsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BandCreateWithoutTagMapsInputObjectSchema),
        z.lazy(() => BandUncheckedCreateWithoutTagMapsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BandCreateOrConnectWithoutTagMapsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BandCreateNestedOneWithoutTagMapsInputObjectSchema = Schema;
