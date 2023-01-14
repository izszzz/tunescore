import { z } from 'zod';
import { BandCreateWithoutPointsInputObjectSchema } from './BandCreateWithoutPointsInput.schema';
import { BandUncheckedCreateWithoutPointsInputObjectSchema } from './BandUncheckedCreateWithoutPointsInput.schema';
import { BandCreateOrConnectWithoutPointsInputObjectSchema } from './BandCreateOrConnectWithoutPointsInput.schema';
import { BandUpsertWithoutPointsInputObjectSchema } from './BandUpsertWithoutPointsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutPointsInputObjectSchema } from './BandUpdateWithoutPointsInput.schema';
import { BandUncheckedUpdateWithoutPointsInputObjectSchema } from './BandUncheckedUpdateWithoutPointsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateOneWithoutPointsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BandCreateWithoutPointsInputObjectSchema),
        z.lazy(() => BandUncheckedCreateWithoutPointsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BandCreateOrConnectWithoutPointsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => BandUpsertWithoutPointsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => BandUpdateWithoutPointsInputObjectSchema),
        z.lazy(() => BandUncheckedUpdateWithoutPointsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BandUpdateOneWithoutPointsNestedInputObjectSchema = Schema;
