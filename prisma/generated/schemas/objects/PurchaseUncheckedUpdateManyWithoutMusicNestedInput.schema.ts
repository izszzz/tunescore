import { z } from 'zod';
import { PurchaseCreateWithoutMusicInputObjectSchema } from './PurchaseCreateWithoutMusicInput.schema';
import { PurchaseUncheckedCreateWithoutMusicInputObjectSchema } from './PurchaseUncheckedCreateWithoutMusicInput.schema';
import { PurchaseCreateOrConnectWithoutMusicInputObjectSchema } from './PurchaseCreateOrConnectWithoutMusicInput.schema';
import { PurchaseUpsertWithWhereUniqueWithoutMusicInputObjectSchema } from './PurchaseUpsertWithWhereUniqueWithoutMusicInput.schema';
import { PurchaseCreateManyMusicInputEnvelopeObjectSchema } from './PurchaseCreateManyMusicInputEnvelope.schema';
import { PurchaseWhereUniqueInputObjectSchema } from './PurchaseWhereUniqueInput.schema';
import { PurchaseUpdateWithWhereUniqueWithoutMusicInputObjectSchema } from './PurchaseUpdateWithWhereUniqueWithoutMusicInput.schema';
import { PurchaseUpdateManyWithWhereWithoutMusicInputObjectSchema } from './PurchaseUpdateManyWithWhereWithoutMusicInput.schema';
import { PurchaseScalarWhereInputObjectSchema } from './PurchaseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PurchaseUncheckedUpdateManyWithoutMusicNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PurchaseCreateWithoutMusicInputObjectSchema),
          z.lazy(() => PurchaseCreateWithoutMusicInputObjectSchema).array(),
          z.lazy(() => PurchaseUncheckedCreateWithoutMusicInputObjectSchema),
          z
            .lazy(() => PurchaseUncheckedCreateWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PurchaseCreateOrConnectWithoutMusicInputObjectSchema),
          z
            .lazy(() => PurchaseCreateOrConnectWithoutMusicInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => PurchaseUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => PurchaseUpsertWithWhereUniqueWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PurchaseCreateManyMusicInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema),
          z.lazy(() => PurchaseWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => PurchaseUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => PurchaseUpdateWithWhereUniqueWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => PurchaseUpdateManyWithWhereWithoutMusicInputObjectSchema,
          ),
          z
            .lazy(
              () => PurchaseUpdateManyWithWhereWithoutMusicInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PurchaseScalarWhereInputObjectSchema),
          z.lazy(() => PurchaseScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PurchaseUncheckedUpdateManyWithoutMusicNestedInputObjectSchema =
  Schema;
