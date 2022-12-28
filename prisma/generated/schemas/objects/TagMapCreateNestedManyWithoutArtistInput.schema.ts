import { z } from 'zod';
import { TagMapCreateWithoutArtistInputObjectSchema } from './TagMapCreateWithoutArtistInput.schema';
import { TagMapUncheckedCreateWithoutArtistInputObjectSchema } from './TagMapUncheckedCreateWithoutArtistInput.schema';
import { TagMapCreateOrConnectWithoutArtistInputObjectSchema } from './TagMapCreateOrConnectWithoutArtistInput.schema';
import { TagMapCreateManyArtistInputEnvelopeObjectSchema } from './TagMapCreateManyArtistInputEnvelope.schema';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateNestedManyWithoutArtistInput> = z
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
    createMany: z
      .lazy(() => TagMapCreateManyArtistInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => TagMapWhereUniqueInputObjectSchema),
        z.lazy(() => TagMapWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TagMapCreateNestedManyWithoutArtistInputObjectSchema = Schema;
