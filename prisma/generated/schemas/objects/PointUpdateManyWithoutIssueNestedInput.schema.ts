import { z } from 'zod';
import { PointCreateWithoutIssueInputObjectSchema } from './PointCreateWithoutIssueInput.schema';
import { PointUncheckedCreateWithoutIssueInputObjectSchema } from './PointUncheckedCreateWithoutIssueInput.schema';
import { PointCreateOrConnectWithoutIssueInputObjectSchema } from './PointCreateOrConnectWithoutIssueInput.schema';
import { PointUpsertWithWhereUniqueWithoutIssueInputObjectSchema } from './PointUpsertWithWhereUniqueWithoutIssueInput.schema';
import { PointCreateManyIssueInputEnvelopeObjectSchema } from './PointCreateManyIssueInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithWhereUniqueWithoutIssueInputObjectSchema } from './PointUpdateWithWhereUniqueWithoutIssueInput.schema';
import { PointUpdateManyWithWhereWithoutIssueInputObjectSchema } from './PointUpdateManyWithWhereWithoutIssueInput.schema';
import { PointScalarWhereInputObjectSchema } from './PointScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateManyWithoutIssueNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PointCreateWithoutIssueInputObjectSchema),
        z.lazy(() => PointCreateWithoutIssueInputObjectSchema).array(),
        z.lazy(() => PointUncheckedCreateWithoutIssueInputObjectSchema),
        z.lazy(() => PointUncheckedCreateWithoutIssueInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PointCreateOrConnectWithoutIssueInputObjectSchema),
        z.lazy(() => PointCreateOrConnectWithoutIssueInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PointUpsertWithWhereUniqueWithoutIssueInputObjectSchema),
        z
          .lazy(() => PointUpsertWithWhereUniqueWithoutIssueInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PointCreateManyIssueInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PointUpdateWithWhereUniqueWithoutIssueInputObjectSchema),
        z
          .lazy(() => PointUpdateWithWhereUniqueWithoutIssueInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PointUpdateManyWithWhereWithoutIssueInputObjectSchema),
        z
          .lazy(() => PointUpdateManyWithWhereWithoutIssueInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PointScalarWhereInputObjectSchema),
        z.lazy(() => PointScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PointUpdateManyWithoutIssueNestedInputObjectSchema = Schema;
