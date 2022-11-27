import { z } from 'zod';
import { BandCreateWithoutAlbumsInputObjectSchema } from './BandCreateWithoutAlbumsInput.schema';
import { BandUncheckedCreateWithoutAlbumsInputObjectSchema } from './BandUncheckedCreateWithoutAlbumsInput.schema';
import { BandCreateOrConnectWithoutAlbumsInputObjectSchema } from './BandCreateOrConnectWithoutAlbumsInput.schema';
import { BandUpsertWithoutAlbumsInputObjectSchema } from './BandUpsertWithoutAlbumsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutAlbumsInputObjectSchema } from './BandUpdateWithoutAlbumsInput.schema';
import { BandUncheckedUpdateWithoutAlbumsInputObjectSchema } from './BandUncheckedUpdateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateOneWithoutAlbumsNestedInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => BandCreateWithoutAlbumsInputObjectSchema),
            z.lazy(() => BandUncheckedCreateWithoutAlbumsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => BandCreateOrConnectWithoutAlbumsInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => BandUpsertWithoutAlbumsInputObjectSchema)
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
            z.lazy(() => BandUpdateWithoutAlbumsInputObjectSchema),
            z.lazy(() => BandUncheckedUpdateWithoutAlbumsInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ],
);

export const BandUpdateOneWithoutAlbumsNestedInputObjectSchema = Schema;
