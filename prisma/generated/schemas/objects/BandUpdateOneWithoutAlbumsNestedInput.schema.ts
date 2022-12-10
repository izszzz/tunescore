import { z } from 'zod';
import { BandCreateWithoutAlbumsInputObjectSchema } from './BandCreateWithoutAlbumsInput.schema';
import { BandUncheckedCreateWithoutAlbumsInputObjectSchema } from './BandUncheckedCreateWithoutAlbumsInput.schema';
import { BandCreateOrConnectWithoutAlbumsInputObjectSchema } from './BandCreateOrConnectWithoutAlbumsInput.schema';
import { BandUpsertWithoutAlbumsInputObjectSchema } from './BandUpsertWithoutAlbumsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';
import { BandUpdateWithoutAlbumsInputObjectSchema } from './BandUpdateWithoutAlbumsInput.schema';
import { BandUncheckedUpdateWithoutAlbumsInputObjectSchema } from './BandUncheckedUpdateWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateOneWithoutAlbumsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => BandCreateWithoutAlbumsInputObjectSchema),
        z.lazy(() => BandUncheckedCreateWithoutAlbumsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => BandCreateOrConnectWithoutAlbumsInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => BandUpsertWithoutAlbumsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => BandUpdateWithoutAlbumsInputObjectSchema),
        z.lazy(() => BandUncheckedUpdateWithoutAlbumsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const BandUpdateOneWithoutAlbumsNestedInputObjectSchema = Schema;
