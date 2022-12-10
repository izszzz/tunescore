import { z } from 'zod';
import { AlbumCreateWithoutBandInputObjectSchema } from './AlbumCreateWithoutBandInput.schema';
import { AlbumUncheckedCreateWithoutBandInputObjectSchema } from './AlbumUncheckedCreateWithoutBandInput.schema';
import { AlbumCreateOrConnectWithoutBandInputObjectSchema } from './AlbumCreateOrConnectWithoutBandInput.schema';
import { AlbumUpsertWithWhereUniqueWithoutBandInputObjectSchema } from './AlbumUpsertWithWhereUniqueWithoutBandInput.schema';
import { AlbumCreateManyBandInputEnvelopeObjectSchema } from './AlbumCreateManyBandInputEnvelope.schema';
import { AlbumWhereUniqueInputObjectSchema } from './AlbumWhereUniqueInput.schema';
import { AlbumUpdateWithWhereUniqueWithoutBandInputObjectSchema } from './AlbumUpdateWithWhereUniqueWithoutBandInput.schema';
import { AlbumUpdateManyWithWhereWithoutBandInputObjectSchema } from './AlbumUpdateManyWithWhereWithoutBandInput.schema';
import { AlbumScalarWhereInputObjectSchema } from './AlbumScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateManyWithoutBandNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AlbumCreateWithoutBandInputObjectSchema),
        z.lazy(() => AlbumCreateWithoutBandInputObjectSchema).array(),
        z.lazy(() => AlbumUncheckedCreateWithoutBandInputObjectSchema),
        z.lazy(() => AlbumUncheckedCreateWithoutBandInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => AlbumCreateOrConnectWithoutBandInputObjectSchema),
        z.lazy(() => AlbumCreateOrConnectWithoutBandInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => AlbumUpsertWithWhereUniqueWithoutBandInputObjectSchema),
        z
          .lazy(() => AlbumUpsertWithWhereUniqueWithoutBandInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => AlbumCreateManyBandInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => AlbumWhereUniqueInputObjectSchema),
        z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => AlbumWhereUniqueInputObjectSchema),
        z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => AlbumWhereUniqueInputObjectSchema),
        z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => AlbumWhereUniqueInputObjectSchema),
        z.lazy(() => AlbumWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => AlbumUpdateWithWhereUniqueWithoutBandInputObjectSchema),
        z
          .lazy(() => AlbumUpdateWithWhereUniqueWithoutBandInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => AlbumUpdateManyWithWhereWithoutBandInputObjectSchema),
        z
          .lazy(() => AlbumUpdateManyWithWhereWithoutBandInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => AlbumScalarWhereInputObjectSchema),
        z.lazy(() => AlbumScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const AlbumUpdateManyWithoutBandNestedInputObjectSchema = Schema;
