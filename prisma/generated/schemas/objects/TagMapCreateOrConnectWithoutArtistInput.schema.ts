import { z } from 'zod';
import { TagMapWhereUniqueInputObjectSchema } from './TagMapWhereUniqueInput.schema';
import { TagMapCreateWithoutArtistInputObjectSchema } from './TagMapCreateWithoutArtistInput.schema';
import { TagMapUncheckedCreateWithoutArtistInputObjectSchema } from './TagMapUncheckedCreateWithoutArtistInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapCreateOrConnectWithoutArtistInput> = z
  .object({
    where: z.lazy(() => TagMapWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TagMapCreateWithoutArtistInputObjectSchema),
      z.lazy(() => TagMapUncheckedCreateWithoutArtistInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapCreateOrConnectWithoutArtistInputObjectSchema = Schema;
