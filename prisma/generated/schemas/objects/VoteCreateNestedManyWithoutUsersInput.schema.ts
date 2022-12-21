import { z } from 'zod';
import { VoteCreateWithoutUsersInputObjectSchema } from './VoteCreateWithoutUsersInput.schema';
import { VoteUncheckedCreateWithoutUsersInputObjectSchema } from './VoteUncheckedCreateWithoutUsersInput.schema';
import { VoteCreateOrConnectWithoutUsersInputObjectSchema } from './VoteCreateOrConnectWithoutUsersInput.schema';
import { VoteWhereUniqueInputObjectSchema } from './VoteWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteCreateNestedManyWithoutUsersInput> = z
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
    connect: z
      .union([
        z.lazy(() => VoteWhereUniqueInputObjectSchema),
        z.lazy(() => VoteWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const VoteCreateNestedManyWithoutUsersInputObjectSchema = Schema;
