import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutAlbumInputObjectSchema } from './TagMapUpdateWithoutAlbumInput.schema';
import { TagMapUncheckedUpdateWithoutAlbumInputObjectSchema } from './TagMapUncheckedUpdateWithoutAlbumInput.schema';
import { TagMapCreateWithoutAlbumInputObjectSchema } from './TagMapCreateWithoutAlbumInput.schema';
import { TagMapUncheckedCreateWithoutAlbumInputObjectSchema } from './TagMapUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpsertWithWhereUniqueWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagMapUpdateWithoutAlbumInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateWithoutAlbumInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpsertWithWhereUniqueWithoutAlbumInputObjectSchema = Schema;
