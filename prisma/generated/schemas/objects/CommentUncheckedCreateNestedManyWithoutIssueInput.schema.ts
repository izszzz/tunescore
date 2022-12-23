import { z } from 'zod';
import { CommentCreateWithoutIssueInputObjectSchema } from './CommentCreateWithoutIssueInput.schema';
import { CommentUncheckedCreateWithoutIssueInputObjectSchema } from './CommentUncheckedCreateWithoutIssueInput.schema';
import { CommentCreateOrConnectWithoutIssueInputObjectSchema } from './CommentCreateOrConnectWithoutIssueInput.schema';
import { CommentCreateManyIssueInputEnvelopeObjectSchema } from './CommentCreateManyIssueInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutIssueInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutIssueInputObjectSchema),
          z.lazy(() => CommentCreateWithoutIssueInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutIssueInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutIssueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutIssueInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutIssueInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyIssueInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedCreateNestedManyWithoutIssueInputObjectSchema =
  Schema;
