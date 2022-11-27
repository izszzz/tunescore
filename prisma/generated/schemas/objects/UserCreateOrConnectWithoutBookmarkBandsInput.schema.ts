import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutBookmarkBandsInputObjectSchema } from './UserCreateWithoutBookmarkBandsInput.schema';
import { UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema } from './UserUncheckedCreateWithoutBookmarkBandsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutBookmarkBandsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutBookmarkBandsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutBookmarkBandsInputObjectSchema),
    ]),
  })
  .strict();

export const UserCreateOrConnectWithoutBookmarkBandsInputObjectSchema = Schema;
