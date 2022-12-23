import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentCreateWithoutIssueInputObjectSchema } from './CommentCreateWithoutIssueInput.schema';
import { CommentUncheckedCreateWithoutIssueInputObjectSchema } from './CommentUncheckedCreateWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentCreateOrConnectWithoutIssueInput> = z
  .object({
    where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CommentCreateWithoutIssueInputObjectSchema),
      z.lazy(() => CommentUncheckedCreateWithoutIssueInputObjectSchema),
    ]),
  })
  .strict();

export const CommentCreateOrConnectWithoutIssueInputObjectSchema = Schema;
