import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutPullInputObjectSchema } from './CommentUpdateWithoutPullInput.schema';
import { CommentUncheckedUpdateWithoutPullInputObjectSchema } from './CommentUncheckedUpdateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutPullInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => CommentUpdateWithoutPullInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateWithoutPullInputObjectSchema),
    ]),
  })
  .strict();

export const CommentUpdateWithWhereUniqueWithoutPullInputObjectSchema = Schema;
