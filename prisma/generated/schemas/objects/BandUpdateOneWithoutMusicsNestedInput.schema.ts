import { z } from 'zod';
import { BandCreateWithoutMusicsInputObjectSchema } from './BandCreateWithoutMusicsInput.schema';
import { BandUncheckedCreateWithoutMusicsInputObjectSchema } from './BandUncheckedCreateWithoutMusicsInput.schema';
import { BandCreateOrConnectWithoutMusicsInputObjectSchema } from './BandCreateOrConnectWithoutMusicsInput.schema';
import { BandUpsertWithoutMusicsInputObjectSchema } from './BandUpsertWithoutMusicsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutMusicsInputObjectSchema } from './BandUpdateWithoutMusicsInput.schema';
import { BandUncheckedUpdateWithoutMusicsInputObjectSchema } from './BandUncheckedUpdateWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateOneWithoutMusicsNestedInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => BandCreateWithoutMusicsInputObjectSchema),
            z.lazy(() => BandUncheckedCreateWithoutMusicsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => BandCreateOrConnectWithoutMusicsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => BandUpsertWithoutMusicsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => BandUpdateWithoutMusicsInputObjectSchema),
            z.lazy(() => BandUncheckedUpdateWithoutMusicsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ],
);

export const BandUpdateOneWithoutMusicsNestedInputObjectSchema = Schema;
