import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutArtistInputObjectSchema } from './TagMapUpdateWithoutArtistInput.schema';
import { TagMapUncheckedUpdateWithoutArtistInputObjectSchema } from './TagMapUncheckedUpdateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateWithWhereUniqueWithoutArtistInput> =
  z
    .object({
      where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TagMapUpdateWithoutArtistInputObjectSchema),
        z.lazy(() => TagMapUncheckedUpdateWithoutArtistInputObjectSchema),
      ]),
    })
    .strict();

export const TagMapUpdateWithWhereUniqueWithoutArtistInputObjectSchema = Schema;
