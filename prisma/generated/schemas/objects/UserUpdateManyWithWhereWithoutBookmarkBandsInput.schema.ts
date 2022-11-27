import { z } from 'zod';
import { UserScalarWhereInputObjectSchema } from './UserScalarWhereInput.schema';
import { UserUpdateManyMutationInputObjectSchema } from './UserUpdateManyMutationInput.schema';
import { UserUncheckedUpdateManyWithoutBookmarksInputObjectSchema } from './UserUncheckedUpdateManyWithoutBookmarksInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutBookmarkBandsInput> =
  z
    .object({
      where: z.lazy(() => UserScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UserUpdateManyMutationInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateManyWithoutBookmarksInputObjectSchema),
      ]),
    })
    .strict();

export const UserUpdateManyWithWhereWithoutBookmarkBandsInputObjectSchema =
  Schema;
