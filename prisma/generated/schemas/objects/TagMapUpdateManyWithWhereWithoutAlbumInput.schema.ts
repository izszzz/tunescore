import { z } from 'zod';
import { TagMapScalarWhereInputObjectSchema } from './TagMapScalarWhereInput.schema';
import { TagMapUpdateManyMutationInputObjectSchema } from './TagMapUpdateManyMutationInput.schema';
import { TagMapUncheckedUpdateManyWithoutTagMapsInputObjectSchema } from './TagMapUncheckedUpdateManyWithoutTagMapsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TagMapUpdateManyWithWhereWithoutAlbumInput> = z
  .object({
    where: z.lazy(() => TagMapScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TagMapUpdateManyMutationInputObjectSchema),
      z.lazy(() => TagMapUncheckedUpdateManyWithoutTagMapsInputObjectSchema),
    ]),
  })
  .strict();

export const TagMapUpdateManyWithWhereWithoutAlbumInputObjectSchema = Schema;
