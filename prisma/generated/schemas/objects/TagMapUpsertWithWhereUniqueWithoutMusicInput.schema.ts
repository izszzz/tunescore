import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutMusicInputObjectSchema } from './TagMapUpdateWithoutMusicInput.schema';
import { TagMapUncheckedUpdateWithoutMusicInputObjectSchema } from './TagMapUncheckedUpdateWithoutMusicInput.schema';
import { TagMapCreateWithoutMusicInputObjectSchema } from './TagMapCreateWithoutMusicInput.schema';
import { TagMapUncheckedCreateWithoutMusicInputObjectSchema } from './TagMapUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpsertWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TagMapUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutMusicInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpsertWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
