import { z } from 'zod';
import { CommentCreateWithoutIssueInputObjectSchema } from './CommentCreateWithoutIssueInput.schema';
import { CommentUncheckedCreateWithoutIssueInputObjectSchema } from './CommentUncheckedCreateWithoutIssueInput.schema';
import { CommentCreateOrConnectWithoutIssueInputObjectSchema } from './CommentCreateOrConnectWithoutIssueInput.schema';
import { CommentUpsertWithWhereUniqueWithoutIssueInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutIssueInput.schema';
import { CommentCreateManyIssueInputEnvelopeObjectSchema } from './CommentCreateManyIssueInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutIssueInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutIssueInput.schema';
import { CommentUpdateManyWithWhereWithoutIssueInputObjectSchema } from './CommentUpdateManyWithWhereWithoutIssueInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutIssueNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => CommentUpsertWithWhereUniqueWithoutIssueInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpsertWithWhereUniqueWithoutIssueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyIssueInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => CommentUpdateWithWhereUniqueWithoutIssueInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateWithWhereUniqueWithoutIssueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutIssueInputObjectSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutIssueInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CommentScalarWhereInputObjectSchema),
          z.lazy(() => CommentScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateManyWithoutIssueNestedInputObjectSchema =
  Schema;
