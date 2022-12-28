import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapCreateWithoutAlbumInputObjectSchema } from './TagMapCreateWithoutAlbumInput.schema';
import { TagMapUncheckedCreateWithoutAlbumInputObjectSchema } from './TagMapUncheckedCreateWithoutAlbumInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateOrConnectWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutAlbumInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutAlbumInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapCreateOrConnectWithoutAlbumInputObjectSchema = Schema;
