import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutIssueInputObjectSchema } from './CommentUpdateWithoutIssueInput.schema';
import { CommentUncheckedUpdateWithoutIssueInputObjectSchema } from './CommentUncheckedUpdateWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutIssueInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => CommentUpdateWithoutIssueInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutIssueInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpdateWithWhereUniqueWithoutIssueInputObjectSchema = Schema;
