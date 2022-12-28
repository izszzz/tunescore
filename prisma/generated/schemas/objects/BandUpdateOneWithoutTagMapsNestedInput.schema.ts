import { z } from 'zod';
import { BandCreateWithoutTagMapsInputObjectSchema } from './BandCreateWithoutTagMapsInput.schema';
import { BandUncheckedCreateWithoutTagMapsInputObjectSchema } from './BandUncheckedCreateWithoutTagMapsInput.schema';
import { BandCreateOrConnectWithoutTagMapsInputObjectSchema } from './BandCreateOrConnectWithoutTagMapsInput.schema';
import { BandUpsertWithoutTagMapsInputObjectSchema } from './BandUpsertWithoutTagMapsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutTagMapsInputObjectSchema } from './BandUpdateWithoutTagMapsInput.schema';
import { BandUncheckedUpdateWithoutTagMapsInputObjectSchema } from './BandUncheckedUpdateWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateOneWithoutTagMapsNestedInput> = z
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
    upsert: z.lazy(() => BandUpsertWithoutTagMapsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => BandUpdateWithoutTagMapsInputObjectSchema),
        z.lazy(() => BandUncheckedUpdateWithoutTagMapsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BandUpdateOneWithoutTagMapsNestedInputObjectSchema = Schema;
