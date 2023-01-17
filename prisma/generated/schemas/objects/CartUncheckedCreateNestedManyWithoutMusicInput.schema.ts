import { z } from 'zod';
import { CartCreateWithoutMusicInputObjectSchema } from './CartCreateWithoutMusicInput.schema';
import { CartUncheckedCreateWithoutMusicInputObjectSchema } from './CartUncheckedCreateWithoutMusicInput.schema';
import { CartCreateOrConnectWithoutMusicInputObjectSchema } from './CartCreateOrConnectWithoutMusicInput.schema';
import { CartCreateManyMusicInputEnvelopeObjectSchema } from './CartCreateManyMusicInputEnvelope.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedCreateNestedManyWithoutMusicInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CartCreateWithoutMusicInputObjectSchema),
          z.lazy(() => CartCreateWithoutMusicInputObjectSchema).array(),
          z.lazy(() => CartUncheckedCreateWithoutMusicInputObjectSchema),
          z
            .lazy(() => CartUncheckedCreateWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CartCreateOrConnectWithoutMusicInputObjectSchema),
          z
            .lazy(() => CartCreateOrConnectWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CartCreateManyMusicInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CartWhereUniqueInputObjectSchema),
          z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CartUncheckedCreateNestedManyWithoutMusicInputObjectSchema =
  Schema;
