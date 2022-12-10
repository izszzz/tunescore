import { z } from 'zod';
import { ArtistCreateWithoutComposedMusicsInputObjectSchema } from './ArtistCreateWithoutComposedMusicsInput.schema';
import { ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema } from './ArtistUncheckedCreateWithoutComposedMusicsInput.schema';
import { ArtistCreateOrConnectWithoutComposedMusicsInputObjectSchema } from './ArtistCreateOrConnectWithoutComposedMusicsInput.schema';
import { ArtistUpsertWithWhereUniqueWithoutComposedMusicsInputObjectSchema } from './ArtistUpsertWithWhereUniqueWithoutComposedMusicsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithWhereUniqueWithoutComposedMusicsInputObjectSchema } from './ArtistUpdateWithWhereUniqueWithoutComposedMusicsInput.schema';
import { ArtistUpdateManyWithWhereWithoutComposedMusicsInputObjectSchema } from './ArtistUpdateManyWithWhereWithoutComposedMusicsInput.schema';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUpdateManyWithoutComposedMusicsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistCreateWithoutComposedMusicsInputObjectSchema),
          z
            .lazy(() => ArtistCreateWithoutComposedMusicsInputObjectSchema)
            .array(),
          z.lazy(
            () => ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistUncheckedCreateWithoutComposedMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ArtistCreateOrConnectWithoutComposedMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistCreateOrConnectWithoutComposedMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ArtistUpsertWithWhereUniqueWithoutComposedMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistUpsertWithWhereUniqueWithoutComposedMusicsInputObjectSchema,
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
              ArtistUpdateWithWhereUniqueWithoutComposedMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistUpdateWithWhereUniqueWithoutComposedMusicsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ArtistUpdateManyWithWhereWithoutComposedMusicsInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ArtistUpdateManyWithWhereWithoutComposedMusicsInputObjectSchema,
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

export const ArtistUpdateManyWithoutComposedMusicsNestedInputObjectSchema =
  Schema;
