import { z } from 'zod';
import { AlbumCreateWithoutArtistsInputObjectSchema } from './AlbumCreateWithoutArtistsInput.schema';
import { AlbumUncheckedCreateWithoutArtistsInputObjectSchema } from './AlbumUncheckedCreateWithoutArtistsInput.schema';
import { AlbumCreateOrConnectWithoutArtistsInputObjectSchema } from './AlbumCreateOrConnectWithoutArtistsInput.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateNestedManyWithoutArtistsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema),
        z.lazy(() => AlbumCreateWithoutArtistsInputObjectSchema).array(),
        z.lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema),
        z
          .lazy(() => AlbumUncheckedCreateWithoutArtistsInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AlbumCreateOrConnectWithoutArtistsInputObjectSchema),
        z
          .lazy(() => AlbumCreateOrConnectWithoutArtistsInputObjectSchema)
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

export const AlbumCreateNestedManyWithoutArtistsInputObjectSchema = Schema;
