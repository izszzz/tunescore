import { z } from 'zod';
import { UserUpdateWithoutIssuesInputObjectSchema } from './UserUpdateWithoutIssuesInput.schema';
import { UserUncheckedUpdateWithoutIssuesInputObjectSchema } from './UserUncheckedUpdateWithoutIssuesInput.schema';
import { UserCreateWithoutIssuesInputObjectSchema } from './UserCreateWithoutIssuesInput.schema';
import { UserUncheckedCreateWithoutIssuesInputObjectSchema } from './UserUncheckedCreateWithoutIssuesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutIssuesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutIssuesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutIssuesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutIssuesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutIssuesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutIssuesInputObjectSchema = Schema;
