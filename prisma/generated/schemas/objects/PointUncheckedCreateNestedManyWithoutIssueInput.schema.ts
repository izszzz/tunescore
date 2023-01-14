import { z } from 'zod';
import { PointCreateWithoutIssueInputObjectSchema } from './PointCreateWithoutIssueInput.schema';
import { PointUncheckedCreateWithoutIssueInputObjectSchema } from './PointUncheckedCreateWithoutIssueInput.schema';
import { PointCreateOrConnectWithoutIssueInputObjectSchema } from './PointCreateOrConnectWithoutIssueInput.schema';
import { PointCreateManyIssueInputEnvelopeObjectSchema } from './PointCreateManyIssueInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedCreateNestedManyWithoutIssueInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PointCreateWithoutIssueInputObjectSchema),
          z.lazy(() => PointCreateWithoutIssueInputObjectSchema).array(),
          z.lazy(() => PointUncheckedCreateWithoutIssueInputObjectSchema),
          z
            .lazy(() => PointUncheckedCreateWithoutIssueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PointCreateOrConnectWithoutIssueInputObjectSchema),
          z
            .lazy(() => PointCreateOrConnectWithoutIssueInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PointCreateManyIssueInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PointUncheckedCreateNestedManyWithoutIssueInputObjectSchema =
  Schema;
