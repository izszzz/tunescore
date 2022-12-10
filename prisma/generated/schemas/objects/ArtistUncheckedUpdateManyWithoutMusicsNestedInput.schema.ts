import { z } from 'zod';
import { ArtistCreateWithoutMusicsInputObjectSchema } from './ArtistCreateWithoutMusicsInput.schema';
import { ArtistUncheckedCreateWithoutMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutMusicsInput.schema';
import { ArtistCreateOrConnectWithoutMusicsInputObjectSchema } from './ArtistCreateOrConnectWithoutMusicsInput.schema';
import { ArtistUpsertWithWhereUniqueWithoutMusicsInputObjectSchema } from './ArtistUpsertWithWhereUniqueWithoutMusicsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithWhereUniqueWithoutMusicsInputObjectSchema } from './ArtistUpdateWithWhereUniqueWithoutMusicsInput.schema';
import { ArtistUpdateManyWithWhereWithoutMusicsInputObjectSchema } from './ArtistUpdateManyWithWhereWithoutMusicsInput.schema';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateManyWithoutMusicsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistCreateWithoutMusicsInputObjectSchema),
          z.lazy(() => ArtistCreateWithoutMusicsInputObjectSchema).array(),
          z.lazy(() => ArtistUncheckedCreateWithoutMusicsInputObjectSchema),
          z
            .lazy(() => ArtistUncheckedCreateWithoutMusicsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ArtistCreateOrConnectWithoutMusicsInputObjectSchema),
          z
            .lazy(() => ArtistCreateOrConnectWithoutMusicsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ArtistUpsertWithWhereUniqueWithoutMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistUpsertWithWhereUniqueWithoutMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => ArtistWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ArtistWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ArtistWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ArtistWhereUniqueInputObjectSchema),
          z.lazy(() => ArtistWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ArtistUpdateWithWhereUniqueWithoutMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistUpdateWithWhereUniqueWithoutMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ArtistUpdateManyWithWhereWithoutMusicsInputObjectSchema),
          z
            .lazy(() => ArtistUpdateManyWithWhereWithoutMusicsInputObjectSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ArtistScalarWhereInputObjectSchema),
          z.lazy(() => ArtistScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ArtistUncheckedUpdateManyWithoutMusicsNestedInputObjectSchema =
  Schema;
