import { z } from 'zod';
import { BandCreateWithoutAlbumsInputObjectSchema } from './BandCreateWithoutAlbumsInput.schema';
import { BandUncheckedCreateWithoutAlbumsInputObjectSchema } from './BandUncheckedCreateWithoutAlbumsInput.schema';
import { BandCreateOrConnectWithoutAlbumsInputObjectSchema } from './BandCreateOrConnectWithoutAlbumsInput.schema';
import { BandWhereUniqueInputObjectSchema } from './BandWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandCreateNestedOneWithoutAlbumsInput> = z.union(
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
        connect: z.lazy(() => BandWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ],
);

export const BandCreateNestedOneWithoutAlbumsInputObjectSchema = Schema;
