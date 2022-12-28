import { z } from 'zod';
import { TagMapCreateWithoutArtistInputObjectSchema } from './TagMapCreateWithoutArtistInput.schema';
import { TagMapUncheckedCreateWithoutArtistInputObjectSchema } from './TagMapUncheckedCreateWithoutArtistInput.schema';
import { TagMapCreateOrConnectWithoutArtistInputObjectSchema } from './TagMapCreateOrConnectWithoutArtistInput.schema';
import { TagMapUpsertWithWhereUniqueWithoutArtistInputObjectSchema } from './TagMapUpsertWithWhereUniqueWithoutArtistInput.schema';
import { TagMapCreateManyArtistInputEnvelopeObjectSchema } from './TagMapCreateManyArtistInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithWhereUniqueWithoutArtistInputObjectSchema } from './TagMapUpdateWithWhereUniqueWithoutArtistInput.schema';
import { TagMapUpdateManyWithWhereWithoutArtistInputObjectSchema } from './TagMapUpdateManyWithWhereWithoutArtistInput.schema';
import { TagMapScalarWhereInputObjectSchema } from './TagMapScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateManyWithoutArtistNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TagMapCreateWithoutArtistInputObjectSchema),
        z.lazy(() => TagMapCreateWithoutArtistInputObjectSchema).array(),
        z.lazy(() => TagMapUncheckedCreateWithoutArtistInputObjectSchema),
        z
          .lazy(() => TagMapUncheckedCreateWithoutArtistInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TagMapCreateOrConnectWithoutArtistInputObjectSchema),
        z
          .lazy(() => TagMapCreateOrConnectWithoutArtistInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TagMapUpsertWithWhereUniqueWithoutArtistInputObjectSchema),
        z
          .lazy(() => TagMapUpsertWithWhereUniqueWithoutArtistInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TagMapCreateManyArtistInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TagMapWhereUniqueInputObjectSchema),
        z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TagMapWhereUniqueInputObjectSchema),
        z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TagMapWhereUniqueInputObjectSchema),
        z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagMapWhereUniqueInputObjectSchema),
        z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TagMapUpdateWithWhereUniqueWithoutArtistInputObjectSchema),
        z
          .lazy(() => TagMapUpdateWithWhereUniqueWithoutArtistInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TagMapUpdateManyWithWhereWithoutArtistInputObjectSchema),
        z
          .lazy(() => TagMapUpdateManyWithWhereWithoutArtistInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TagMapScalarWhereInputObjectSchema),
        z.lazy(() => TagMapScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagMapUpdateManyWithoutArtistNestedInputObjectSchema = Schema;
