import { z } from 'zod';
import { BandCreateWithoutMusicsInputObjectSchema } from './BandCreateWithoutMusicsInput.schema';
import { BandUncheckedCreateWithoutMusicsInputObjectSchema } from './BandUncheckedCreateWithoutMusicsInput.schema';
import { BandCreateOrConnectWithoutMusicsInputObjectSchema } from './BandCreateOrConnectWithoutMusicsInput.schema';
import { BandUpsertWithoutMusicsInputObjectSchema } from './BandUpsertWithoutMusicsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutMusicsInputObjectSchema } from './BandUpdateWithoutMusicsInput.schema';
import { BandUncheckedUpdateWithoutMusicsInputObjectSchema } from './BandUncheckedUpdateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateOneWithoutMusicsNestedInput> = z
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
    upsert: z.lazy(() => BandUpsertWithoutMusicsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => BandUpdateWithoutMusicsInputObjectSchema),
        z.lazy(() => BandUncheckedUpdateWithoutMusicsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BandUpdateOneWithoutMusicsNestedInputObjectSchema = Schema;
