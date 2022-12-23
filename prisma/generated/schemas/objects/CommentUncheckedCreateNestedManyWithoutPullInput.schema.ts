import { z } from 'zod';
import { CommentCreateWithoutPullInputObjectSchema } from './CommentCreateWithoutPullInput.schema';
import { CommentUncheckedCreateWithoutPullInputObjectSchema } from './CommentUncheckedCreateWithoutPullInput.schema';
import { CommentCreateOrConnectWithoutPullInputObjectSchema } from './CommentCreateOrConnectWithoutPullInput.schema';
import { CommentCreateManyPullInputEnvelopeObjectSchema } from './CommentCreateManyPullInputEnvelope.schema';
import { CommentWhereUniqueInputObjectSchema } from './CommentWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutPullInput> =
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
      createMany: z
        .lazy(() => CommentCreateManyPullInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputObjectSchema),
          z.lazy(() => CommentWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedCreateNestedManyWithoutPullInputObjectSchema =
  Schema;
