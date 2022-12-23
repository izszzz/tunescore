import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutPullInputObjectSchema } from './CommentUpdateWithoutPullInput.schema';
import { CommentUncheckedUpdateWithoutPullInputObjectSchema } from './CommentUncheckedUpdateWithoutPullInput.schema';
import { CommentCreateWithoutPullInputObjectSchema } from './CommentCreateWithoutPullInput.schema';
import { CommentUncheckedCreateWithoutPullInputObjectSchema } from './CommentUncheckedCreateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutPullInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => CommentUpdateWithoutPullInputObjectSchema),
      z.lazy(() => CommentUncheckedUpdateWithoutPullInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CommentCreateWithoutPullInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutPullInputObjectSchema),
    ]),
  })
  .strict();

export const CommentUpsertWithWhereUniqueWithoutPullInputObjectSchema = Schema;
