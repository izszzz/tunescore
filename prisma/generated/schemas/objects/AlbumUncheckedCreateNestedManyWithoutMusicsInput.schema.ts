import { z } from 'zod';
import { AlbumCreateWithoutMusicsInputObjectSchema } from './AlbumCreateWithoutMusicsInput.schema';
import { AlbumUncheckedCreateWithoutMusicsInputObjectSchema } from './AlbumUncheckedCreateWithoutMusicsInput.schema';
import { AlbumCreateOrConnectWithoutMusicsInputObjectSchema } from './AlbumCreateOrConnectWithoutMusicsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUncheckedCreateNestedManyWithoutMusicsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AlbumCreateWithoutMusicsInputObjectSchema),
          z.lazy(() => AlbumCreateWithoutMusicsInputObjectSchema).array(),
          z.lazy(() => AlbumUncheckedCreateWithoutMusicsInputObjectSchema),
          z
            .lazy(() => AlbumUncheckedCreateWithoutMusicsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => AlbumCreateOrConnectWithoutMusicsInputObjectSchema),
          z
            .lazy(() => AlbumCreateOrConnectWithoutMusicsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => AlbumWhereUniqueInputObjectSchema),
          z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AlbumUncheckedCreateNestedManyWithoutMusicsInputObjectSchema =
  Schema;
