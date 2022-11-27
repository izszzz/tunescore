import { z } from 'zod';
import { AlbumCreateWithoutBandInputObjectSchema } from './AlbumCreateWithoutBandInput.schema';
import { AlbumUncheckedCreateWithoutBandInputObjectSchema } from './AlbumUncheckedCreateWithoutBandInput.schema';
import { AlbumCreateOrConnectWithoutBandInputObjectSchema } from './AlbumCreateOrConnectWithoutBandInput.schema';
import { AlbumCreateManyBandInputEnvelopeObjectSchema } from './AlbumCreateManyBandInputEnvelope.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumCreateNestedManyWithoutBandInput> = z.union(
  [
    z
      .object({
        create: z
          .union([
            z.lazy(() => AlbumCreateWithoutBandInputObjectSchema),
            z.lazy(() => AlbumCreateWithoutBandInputObjectSchema).array(),
            z.lazy(() => AlbumUncheckedCreateWithoutBandInputObjectSchema),
            z
              .lazy(() => AlbumUncheckedCreateWithoutBandInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => AlbumCreateOrConnectWithoutBandInputObjectSchema),
            z
              .lazy(() => AlbumCreateOrConnectWithoutBandInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        createMany: z
          .lazy(() => AlbumCreateManyBandInputEnvelopeObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => AlbumWhereUniqueInputObjectSchema),
            z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ],
);

export const AlbumCreateNestedManyWithoutBandInputObjectSchema = Schema;
