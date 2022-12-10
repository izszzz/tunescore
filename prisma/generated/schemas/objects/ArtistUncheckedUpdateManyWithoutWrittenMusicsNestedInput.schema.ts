import { z } from 'zod';
import { ArtistCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateWithoutWrittenMusicsInput.schema';
import { ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutWrittenMusicsInput.schema';
import { ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema } from './ArtistCreateOrConnectWithoutWrittenMusicsInput.schema';
import { ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInputObjectSchema } from './ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInputObjectSchema } from './ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInput.schema';
import { ArtistUpdateManyWithWhereWithoutWrittenMusicsInputObjectSchema } from './ArtistUpdateManyWithWhereWithoutWrittenMusicsInput.schema';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateManyWithoutWrittenMusicsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistCreateWithoutWrittenMusicsInputObjectSchema),
          z
            .lazy(() => ArtistCreateWithoutWrittenMusicsInputObjectSchema)
            .array(),
          z.lazy(
            () => ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistUncheckedCreateWithoutWrittenMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistCreateOrConnectWithoutWrittenMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistUpsertWithWhereUniqueWithoutWrittenMusicsInputObjectSchema,
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
            () =>
              ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistUpdateWithWhereUniqueWithoutWrittenMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ArtistUpdateManyWithWhereWithoutWrittenMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistUpdateManyWithWhereWithoutWrittenMusicsInputObjectSchema,
            )
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

export const ArtistUncheckedUpdateManyWithoutWrittenMusicsNestedInputObjectSchema =
  Schema;
