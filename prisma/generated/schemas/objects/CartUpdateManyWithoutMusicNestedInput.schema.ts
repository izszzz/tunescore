import { z } from 'zod';
import { CartCreateWithoutMusicInputObjectSchema } from './CartCreateWithoutMusicInput.schema';
import { CartUncheckedCreateWithoutMusicInputObjectSchema } from './CartUncheckedCreateWithoutMusicInput.schema';
import { CartCreateOrConnectWithoutMusicInputObjectSchema } from './CartCreateOrConnectWithoutMusicInput.schema';
import { CartUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './CartUpsertWithWhereUniqueWithoutMusicInput.schema';
import { CartCreateManyMusicInputEnvelopeObjectSchema } from './CartCreateManyMusicInputEnvelope.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './CartUpdateWithWhereUniqueWithoutMusicInput.schema';
import { CartUpdateManyWithWhereWithoutMusicInputObjectSchema } from './CartUpdateManyWithWhereWithoutMusicInput.schema';
import { CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUpdateManyWithoutMusicNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => CartCreateWithoutMusicInputObjectSchema),
        z.lazy(() => CartCreateWithoutMusicInputObjectSchema).array(),
        z.lazy(() => CartUncheckedCreateWithoutMusicInputObjectSchema),
        z.lazy(() => CartUncheckedCreateWithoutMusicInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => CartCreateOrConnectWithoutMusicInputObjectSchema),
        z.lazy(() => CartCreateOrConnectWithoutMusicInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => CartUpsertWithWhereUniqueWithoutMusicInputObjectSchema),
        z
          .lazy(() => CartUpsertWithWhereUniqueWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => CartCreateManyMusicInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => CartWhereUniqueInputObjectSchema),
        z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => CartWhereUniqueInputObjectSchema),
        z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => CartWhereUniqueInputObjectSchema),
        z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => CartWhereUniqueInputObjectSchema),
        z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => CartUpdateWithWhereUniqueWithoutMusicInputObjectSchema),
        z
          .lazy(() => CartUpdateWithWhereUniqueWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => CartUpdateManyWithWhereWithoutMusicInputObjectSchema),
        z
          .lazy(() => CartUpdateManyWithWhereWithoutMusicInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => CartScalarWhereInputObjectSchema),
        z.lazy(() => CartScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CartUpdateManyWithoutMusicNestedInputObjectSchema = Schema;
