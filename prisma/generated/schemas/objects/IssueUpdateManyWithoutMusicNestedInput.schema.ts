import { z } from 'zod';
import { IssueCreateWithoutMusicInputObjectSchema } from './IssueCreateWithoutMusicInput.schema';
import { IssueUncheckedCreateWithoutMusicInputObjectSchema } from './IssueUncheckedCreateWithoutMusicInput.schema';
import { IssueCreateOrConnectWithoutMusicInputObjectSchema } from './IssueCreateOrConnectWithoutMusicInput.schema';
import { IssueUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './IssueUpsertWithWhereUniqueWithoutMusicInput.schema';
import { IssueCreateManyMusicInputEnvelopeObjectSchema } from './IssueCreateManyMusicInputEnvelope.schema';
import { IssueWhereUniqueInputObjectSchema } from './IssueWhereUniqueInput.schema';
import { IssueUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './IssueUpdateWithWhereUniqueWithoutMusicInput.schema';
import { IssueUpdateManyWithWhereWithoutMusicInputObjectSchema } from './IssueUpdateManyWithWhereWithoutMusicInput.schema';
import { IssueScalarWhereInputObjectSchema } from './IssueScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IssueUpdateManyWithoutMusicNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => IssueCreateWithoutMusicInputObjectSchema),
            z.lazy(() => IssueCreateWithoutMusicInputObjectSchema).array(),
            z.lazy(() => IssueUncheckedCreateWithoutMusicInputObjectSchema),
            z
              .lazy(() => IssueUncheckedCreateWithoutMusicInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => IssueCreateOrConnectWithoutMusicInputObjectSchema),
            z
              .lazy(() => IssueCreateOrConnectWithoutMusicInputObjectSchema)
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
              () => IssueUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
            ),
            z
              .lazy(
                () => IssueUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => IssueCreateManyMusicInputEnvelopeObjectSchema)
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
              () => IssueUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
            ),
            z
              .lazy(
                () => IssueUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
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
            z.lazy(() => IssueUpdateManyWithWhereWithoutMusicInputObjectSchema),
            z
              .lazy(() => IssueUpdateManyWithWhereWithoutMusicInputObjectSchema)
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
  ]);

export const IssueUpdateManyWithoutMusicNestedInputObjectSchema = Schema;
