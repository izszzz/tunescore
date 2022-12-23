import { z } from 'zod';
import { CommentCreateWithoutPullInputObjectSchema } from './CommentCreateWithoutPullInput.schema';
import { CommentUncheckedCreateWithoutPullInputObjectSchema } from './CommentUncheckedCreateWithoutPullInput.schema';
import { CommentCreateOrConnectWithoutPullInputObjectSchema } from './CommentCreateOrConnectWithoutPullInput.schema';
import { CommentUpsertWithWhereUniqueWithoutPullInputObjectSchema } from './CommentUpsertWithWhereUniqueWithoutPullInput.schema';
import { CommentCreateManyPullInputEnvelopeObjectSchema } from './CommentCreateManyPullInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';
import { CommentUpdateWithWhereUniqueWithoutPullInputObjectSchema } from './CommentUpdateWithWhereUniqueWithoutPullInput.schema';
import { CommentUpdateManyWithWhereWithoutPullInputObjectSchema } from './CommentUpdateManyWithWhereWithoutPullInput.schema';
import { CommentScalarWhereInputObjectSchema } from './CommentScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutPullNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutPullInputObjectSchema),
          z.lazy(() => CommentCreateWithoutPullInputObjectSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutPullInputObjectSchema),
          z
            .lazy(() => CommentUncheckedCreateWithoutPullInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutPullInputObjectSchema),
          z
            .lazy(() => CommentCreateOrConnectWithoutPullInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => CommentUpsertWithWhereUniqueWithoutPullInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpsertWithWhereUniqueWithoutPullInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyPullInputEnvelopeObjectSchema)
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
            () => CommentUpdateWithWhereUniqueWithoutPullInputObjectSchema,
          ),
          z
            .lazy(
              () => CommentUpdateWithWhereUniqueWithoutPullInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutPullInputObjectSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutPullInputObjectSchema)
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

export const CommentUncheckedUpdateManyWithoutPullNestedInputObjectSchema =
  Schema;
