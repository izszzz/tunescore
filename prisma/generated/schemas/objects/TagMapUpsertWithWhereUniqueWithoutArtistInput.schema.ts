import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutArtistInputObjectSchema } from './TagMapUpdateWithoutArtistInput.schema';
import { TagMapUncheckedUpdateWithoutArtistInputObjectSchema } from './TagMapUncheckedUpdateWithoutArtistInput.schema';
import { TagMapCreateWithoutArtistInputObjectSchema } from './TagMapCreateWithoutArtistInput.schema';
import { TagMapUncheckedCreateWithoutArtistInputObjectSchema } from './TagMapUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpsertWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => TagMapUpdateWithoutArtistInputObjectSchema),
        z.lazy(() => TagMapUncheckedUpdateWithoutArtistInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => TagMapCreateWithoutArtistInputObjectSchema),
        z.lazy(() => TagMapUncheckedCreateWithoutArtistInputObjectSchema),
      ]),
    })
    .strict();

export const TagMapUpsertWithWhereUniqueWithoutArtistInputObjectSchema = Schema;
