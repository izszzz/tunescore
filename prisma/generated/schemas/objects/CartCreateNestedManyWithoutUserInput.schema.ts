import { z } from 'zod';
import { CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';
import { CartCreateOrConnectWithoutUserInputObjectSchema } from './CartCreateOrConnectWithoutUserInput.schema';
import { CartCreateManyUserInputEnvelopeObjectSchema } from './CartCreateManyUserInputEnvelope.schema';
import { CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CartCreateNestedManyWithoutUserInput> = z
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
    createMany: z
      .lazy(() => CartCreateManyUserInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => CartWhereUniqueInputObjectSchema),
        z.lazy(() => CartWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const CartCreateNestedManyWithoutUserInputObjectSchema = Schema;
