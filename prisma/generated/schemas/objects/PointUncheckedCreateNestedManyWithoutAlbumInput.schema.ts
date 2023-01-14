import { z } from 'zod';
import { PointCreateWithoutAlbumInputObjectSchema } from './PointCreateWithoutAlbumInput.schema';
import { PointUncheckedCreateWithoutAlbumInputObjectSchema } from './PointUncheckedCreateWithoutAlbumInput.schema';
import { PointCreateOrConnectWithoutAlbumInputObjectSchema } from './PointCreateOrConnectWithoutAlbumInput.schema';
import { PointCreateManyAlbumInputEnvelopeObjectSchema } from './PointCreateManyAlbumInputEnvelope.schema';
import { PointWhereUniqueInputObjectSchema } from './PointWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PointUncheckedCreateNestedManyWithoutAlbumInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PointCreateWithoutAlbumInputObjectSchema),
          z.lazy(() => PointCreateWithoutAlbumInputObjectSchema).array(),
          z.lazy(() => PointUncheckedCreateWithoutAlbumInputObjectSchema),
          z
            .lazy(() => PointUncheckedCreateWithoutAlbumInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PointCreateOrConnectWithoutAlbumInputObjectSchema),
          z
            .lazy(() => PointCreateOrConnectWithoutAlbumInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PointCreateManyAlbumInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PointWhereUniqueInputObjectSchema),
          z.lazy(() => PointWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PointUncheckedCreateNestedManyWithoutAlbumInputObjectSchema =
  Schema;
