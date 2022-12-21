import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoteScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VoteScalarWhereInputObjectSchema),
        z.lazy(() => VoteScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VoteScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VoteScalarWhereInputObjectSchema),
        z.lazy(() => VoteScalarWhereInputObjectSchema).array(),
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
    pullId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    userIDs: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  })
  .strict();

export const VoteScalarWhereInputObjectSchema = Schema;
