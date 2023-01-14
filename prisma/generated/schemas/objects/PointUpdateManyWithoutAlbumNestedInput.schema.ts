import { z } from 'zod';
import { PointCreateWithoutAlbumInputObjectSchema } from './PointCreateWithoutAlbumInput.schema';
import { PointUncheckedCreateWithoutAlbumInputObjectSchema } from './PointUncheckedCreateWithoutAlbumInput.schema';
import { PointCreateOrConnectWithoutAlbumInputObjectSchema } from './PointCreateOrConnectWithoutAlbumInput.schema';
import { PointUpsertWithWhereUniqueWithoutAlbumInputObjectSchema } from './PointUpsertWithWhereUniqueWithoutAlbumInput.schema';
import { PointCreateManyAlbumInputEnvelopeObjectSchema } from './PointCreateManyAlbumInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';
import { PointUpdateWithWhereUniqueWithoutAlbumInputObjectSchema } from './PointUpdateWithWhereUniqueWithoutAlbumInput.schema';
import { PointUpdateManyWithWhereWithoutAlbumInputObjectSchema } from './PointUpdateManyWithWhereWithoutAlbumInput.schema';
import { PointScalarWhereInputObjectSchema } from './PointScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUpdateManyWithoutAlbumNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PointCreateWithoutAlbumInputObjectSchema),
        z.lazy(() => PointCreateWithoutAlbumInputObjectSchema).array(),
        z.lazy(() => PointUncheckedCreateWithoutAlbumInputObjectSchema),
        z.lazy(() => PointUncheckedCreateWithoutAlbumInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PointCreateOrConnectWithoutAlbumInputObjectSchema),
        z.lazy(() => PointCreateOrConnectWithoutAlbumInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => PointUpsertWithWhereUniqueWithoutAlbumInputObjectSchema),
        z
          .lazy(() => PointUpsertWithWhereUniqueWithoutAlbumInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => PointCreateManyAlbumInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => PointWhereUniqueInputObjectSchema),
        z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => PointUpdateWithWhereUniqueWithoutAlbumInputObjectSchema),
        z
          .lazy(() => PointUpdateWithWhereUniqueWithoutAlbumInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PointUpdateManyWithWhereWithoutAlbumInputObjectSchema),
        z
          .lazy(() => PointUpdateManyWithWhereWithoutAlbumInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => PointScalarWhereInputObjectSchema),
        z.lazy(() => PointScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const PointUpdateManyWithoutAlbumNestedInputObjectSchema = Schema;
