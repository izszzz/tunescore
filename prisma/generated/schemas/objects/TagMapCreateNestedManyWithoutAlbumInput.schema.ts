import { z } from 'zod';
import { TagMapCreateWithoutAlbumInputObjectSchema } from './TagMapCreateWithoutAlbumInput.schema';
import { TagMapUncheckedCreateWithoutAlbumInputObjectSchema } from './TagMapUncheckedCreateWithoutAlbumInput.schema';
import { TagMapCreateOrConnectWithoutAlbumInputObjectSchema } from './TagMapCreateOrConnectWithoutAlbumInput.schema';
import { TagMapCreateManyAlbumInputEnvelopeObjectSchema } from './TagMapCreateManyAlbumInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateNestedManyWithoutAlbumInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagMapCreateWithoutAlbumInputObjectSchema),
        z.lazy(() => TagMapCreateWithoutAlbumInputObjectSchema).array(),
        z.lazy(() => TagMapUncheckedCreateWithoutAlbumInputObjectSchema),
        z
          .lazy(() => TagMapUncheckedCreateWithoutAlbumInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagMapCreateOrConnectWithoutAlbumInputObjectSchema),
        z
          .lazy(() => TagMapCreateOrConnectWithoutAlbumInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TagMapCreateManyAlbumInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagMapWhereUniqueInputObjectSchema),
        z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagMapCreateNestedManyWithoutAlbumInputObjectSchema = Schema;
