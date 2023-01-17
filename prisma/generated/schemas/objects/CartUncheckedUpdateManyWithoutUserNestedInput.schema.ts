import { z } from 'zod';
import { CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';
import { CartCreateOrConnectWithoutUserInputObjectSchema } from './CartCreateOrConnectWithoutUserInput.schema';
import { CartUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CartUpsertWithWhereUniqueWithoutUserInput.schema';
import { CartCreateManyUserInputEnvelopeObjectSchema } from './CartCreateManyUserInputEnvelope.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CartUpdateWithWhereUniqueWithoutUserInput.schema';
import { CartUpdateManyWithWhereWithoutUserInputObjectSchema } from './CartUpdateManyWithWhereWithoutUserInput.schema';
import { CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CartCreateWithoutUserInputObjectSchema),
          z.lazy(() => CartCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CartCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => CartCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CartUpsertWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => CartUpsertWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CartCreateManyUserInputEnvelopeObjectSchema)
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
          z.lazy(() => CartUpdateWithWhereUniqueWithoutUserInputObjectSchema),
          z
            .lazy(() => CartUpdateWithWhereUniqueWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CartUpdateManyWithWhereWithoutUserInputObjectSchema),
          z
            .lazy(() => CartUpdateManyWithWhereWithoutUserInputObjectSchema)
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

export const CartUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
