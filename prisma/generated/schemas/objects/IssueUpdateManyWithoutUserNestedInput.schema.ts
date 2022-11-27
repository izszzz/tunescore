import { z } from 'zod';
import { IssueCreateWithoutUserInputObjectSchema } from './IssueCreateWithoutUserInput.schema';
import { IssueUncheckedCreateWithoutUserInputObjectSchema } from './IssueUncheckedCreateWithoutUserInput.schema';
import { IssueCreateOrConnectWithoutUserInputObjectSchema } from './IssueCreateOrConnectWithoutUserInput.schema';
import { IssueUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './IssueUpsertWithWhereUniqueWithoutUserInput.schema';
import { IssueCreateManyUserInputEnvelopeObjectSchema } from './IssueCreateManyUserInputEnvelope.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './IssueUpdateWithWhereUniqueWithoutUserInput.schema';
import { IssueUpdateManyWithWhereWithoutUserInputObjectSchema } from './IssueUpdateManyWithWhereWithoutUserInput.schema';
import { IssueScalarWhereInputObjectSchema } from './IssueScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateManyWithoutUserNestedInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => IssueCreateWithoutUserInputObjectSchema),
            z.lazy(() => IssueCreateWithoutUserInputObjectSchema).array(),
            z.lazy(() => IssueUncheckedCreateWithoutUserInputObjectSchema),
            z
              .lazy(() => IssueUncheckedCreateWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => IssueCreateOrConnectWithoutUserInputObjectSchema),
            z
              .lazy(() => IssueCreateOrConnectWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .union([
            z.lazy(
              () => IssueUpsertWithWhereUniqueWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () => IssueUpsertWithWhereUniqueWithoutUserInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => IssueCreateManyUserInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => IssueWhereUniqueInputObjectSchema),
            z.lazy(() => IssueWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => IssueWhereUniqueInputObjectSchema),
            z.lazy(() => IssueWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => IssueWhereUniqueInputObjectSchema),
            z.lazy(() => IssueWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => IssueWhereUniqueInputObjectSchema),
            z.lazy(() => IssueWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => IssueUpdateWithWhereUniqueWithoutUserInputObjectSchema,
            ),
            z
              .lazy(
                () => IssueUpdateWithWhereUniqueWithoutUserInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(() => IssueUpdateManyWithWhereWithoutUserInputObjectSchema),
            z
              .lazy(() => IssueUpdateManyWithWhereWithoutUserInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => IssueScalarWhereInputObjectSchema),
            z.lazy(() => IssueScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ],
);

export const IssueUpdateManyWithoutUserNestedInputObjectSchema = Schema;
