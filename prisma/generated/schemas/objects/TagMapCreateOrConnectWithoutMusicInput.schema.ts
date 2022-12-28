import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapCreateWithoutMusicInputObjectSchema } from './TagMapCreateWithoutMusicInput.schema';
import { TagMapUncheckedCreateWithoutMusicInputObjectSchema } from './TagMapUncheckedCreateWithoutMusicInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateOrConnectWithoutMusicInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutMusicInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutMusicInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapCreateOrConnectWithoutMusicInputObjectSchema = Schema;
