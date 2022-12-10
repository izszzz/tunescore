import { z } from 'zod';
import { BandCreateWithoutAlbumsInputObjectSchema } from './BandCreateWithoutAlbumsInput.schema';
import { BandUncheckedCreateWithoutAlbumsInputObjectSchema } from './BandUncheckedCreateWithoutAlbumsInput.schema';
import { BandCreateOrConnectWithoutAlbumsInputObjectSchema } from './BandCreateOrConnectWithoutAlbumsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateNestedOneWithoutAlbumsInput> = z
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
    connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const BandCreateNestedOneWithoutAlbumsInputObjectSchema = Schema;
