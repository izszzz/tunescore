import { z } from 'zod';
import { VoteCreateWithoutUsersInputObjectSchema } from './VoteCreateWithoutUsersInput.schema';
import { VoteUncheckedCreateWithoutUsersInputObjectSchema } from './VoteUncheckedCreateWithoutUsersInput.schema';
import { VoteCreateOrConnectWithoutUsersInputObjectSchema } from './VoteCreateOrConnectWithoutUsersInput.schema';
import { VoteUpsertWithWhereUniqueWithoutUsersInputObjectSchema } from './VoteUpsertWithWhereUniqueWithoutUsersInput.schema';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';
import { VoteUpdateWithWhereUniqueWithoutUsersInputObjectSchema } from './VoteUpdateWithWhereUniqueWithoutUsersInput.schema';
import { VoteUpdateManyWithWhereWithoutUsersInputObjectSchema } from './VoteUpdateManyWithWhereWithoutUsersInput.schema';
import { VoteScalarWhereInputObjectSchema } from './VoteScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteUpdateManyWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VoteCreateWithoutUsersInputObjectSchema),
        z.lazy(() => VoteCreateWithoutUsersInputObjectSchema).array(),
        z.lazy(() => VoteUncheckedCreateWithoutUsersInputObjectSchema),
        z.lazy(() => VoteUncheckedCreateWithoutUsersInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VoteCreateOrConnectWithoutUsersInputObjectSchema),
        z.lazy(() => VoteCreateOrConnectWithoutUsersInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VoteUpsertWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => VoteUpsertWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VoteUpdateWithWhereUniqueWithoutUsersInputObjectSchema),
        z
          .lazy(() => VoteUpdateWithWhereUniqueWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VoteUpdateManyWithWhereWithoutUsersInputObjectSchema),
        z
          .lazy(() => VoteUpdateManyWithWhereWithoutUsersInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VoteScalarWhereInputObjectSchema),
        z.lazy(() => VoteScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const VoteUpdateManyWithoutUsersNestedInputObjectSchema = Schema;
