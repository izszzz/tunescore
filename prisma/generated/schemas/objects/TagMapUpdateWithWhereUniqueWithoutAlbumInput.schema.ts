import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutAlbumInputObjectSchema } from './TagMapUpdateWithoutAlbumInput.schema';
import { TagMapUncheckedUpdateWithoutAlbumInputObjectSchema } from './TagMapUncheckedUpdateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateWithWhereUniqueWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagMapUpdateWithoutAlbumInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpdateWithWhereUniqueWithoutAlbumInputObjectSchema = Schema;
