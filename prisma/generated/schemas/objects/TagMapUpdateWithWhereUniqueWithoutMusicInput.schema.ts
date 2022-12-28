import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapUpdateWithoutMusicInputObjectSchema } from './TagMapUpdateWithoutMusicInput.schema';
import { TagMapUncheckedUpdateWithoutMusicInputObjectSchema } from './TagMapUncheckedUpdateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateWithWhereUniqueWithoutMusicInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TagMapUpdateWithoutMusicInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpdateWithWhereUniqueWithoutMusicInputObjectSchema = Schema;
