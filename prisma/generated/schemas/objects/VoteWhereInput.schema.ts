import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { PullRelationFilterObjectSchema } from './PullRelationFilter.schema';
import { PullWhereInputObjectSchema } from './PullWhereInput.schema';
import { UserListRelationFilterObjectSchema } from './UserListRelationFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VoteWhereInputObjectSchema),
        z.lazy(() => VoteWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VoteWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VoteWhereInputObjectSchema),
        z.lazy(() => VoteWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    start: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    end: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    good: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    bad: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    pull: z
      .union([
        z.lazy(() => PullRelationFilterObjectSchema),
        z.lazy(() => PullWhereInputObjectSchema),
      ])
      .optional(),
    pullId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    users: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const VoteWhereInputObjectSchema = Schema;
