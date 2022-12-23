import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutPullInputObjectSchema } from './CommentCreateWithoutPullInput.schema';
import { CommentUncheckedCreateWithoutPullInputObjectSchema } from './CommentUncheckedCreateWithoutPullInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateOrConnectWithoutPullInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CommentCreateWithoutPullInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutPullInputObjectSchema),
    ]),
  })
  .strict();

export const CommentCreateOrConnectWithoutPullInputObjectSchema = Schema;
