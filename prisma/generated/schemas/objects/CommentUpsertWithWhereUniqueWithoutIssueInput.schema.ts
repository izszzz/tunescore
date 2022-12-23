import { z } from 'zod';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithoutIssueInputObjectSchema } from './CommentUpdateWithoutIssueInput.schema';
import { CommentUncheckedUpdateWithoutIssueInputObjectSchema } from './CommentUncheckedUpdateWithoutIssueInput.schema';
import { CommentCreateWithoutIssueInputObjectSchema } from './CommentCreateWithoutIssueInput.schema';
import { CommentUncheckedCreateWithoutIssueInputObjectSchema } from './CommentUncheckedCreateWithoutIssueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutIssueInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => CommentUpdateWithoutIssueInputObjectSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutIssueInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => CommentCreateWithoutIssueInputObjectSchema),
        z.lazy(() => CommentUncheckedCreateWithoutIssueInputObjectSchema),
      ]),
    })
    .strict();

export const CommentUpsertWithWhereUniqueWithoutIssueInputObjectSchema = Schema;
