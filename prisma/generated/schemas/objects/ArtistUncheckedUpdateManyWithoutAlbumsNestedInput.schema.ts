import { z } from 'zod';
import { ArtistCreateWithoutAlbumsInputObjectSchema } from './ArtistCreateWithoutAlbumsInput.schema';
import { ArtistUncheckedCreateWithoutAlbumsInputObjectSchema } from './ArtistUncheckedCreateWithoutAlbumsInput.schema';
import { ArtistCreateOrConnectWithoutAlbumsInputObjectSchema } from './ArtistCreateOrConnectWithoutAlbumsInput.schema';
import { ArtistUpsertWithWhereUniqueWithoutAlbumsInputObjectSchema } from './ArtistUpsertWithWhereUniqueWithoutAlbumsInput.schema';
import { ArtistWhereUniqueInputObjectSchema } from './ArtistWhereUniqueInput.schema';
import { ArtistUpdateWithWhereUniqueWithoutAlbumsInputObjectSchema } from './ArtistUpdateWithWhereUniqueWithoutAlbumsInput.schema';
import { ArtistUpdateManyWithWhereWithoutAlbumsInputObjectSchema } from './ArtistUpdateManyWithWhereWithoutAlbumsInput.schema';
import { ArtistScalarWhereInputObjectSchema } from './ArtistScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ArtistUncheckedUpdateManyWithoutAlbumsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ArtistCreateWithoutAlbumsInputObjectSchema),
          z.lazy(() => ArtistCreateWithoutAlbumsInputObjectSchema).array(),
          z.lazy(() => ArtistUncheckedCreateWithoutAlbumsInputObjectSchema),
          z
            .lazy(() => ArtistUncheckedCreateWithoutAlbumsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ArtistCreateOrConnectWithoutAlbumsInputObjectSchema),
          z
            .lazy(() => ArtistCreateOrConnectWithoutAlbumsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ArtistUpsertWithWhereUniqueWithoutAlbumsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistUpsertWithWhereUniqueWithoutAlbumsInputObjectSchema,
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
            () => ArtistUpdateWithWhereUniqueWithoutAlbumsInputObjectSchema,
          ),
          z
            .lazy(
              () => ArtistUpdateWithWhereUniqueWithoutAlbumsInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ArtistUpdateManyWithWhereWithoutAlbumsInputObjectSchema),
          z
            .lazy(() => ArtistUpdateManyWithWhereWithoutAlbumsInputObjectSchema)
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

export const ArtistUncheckedUpdateManyWithoutAlbumsNestedInputObjectSchema =
  Schema;
