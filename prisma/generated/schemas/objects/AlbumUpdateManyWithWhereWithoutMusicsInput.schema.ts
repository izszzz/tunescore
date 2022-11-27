import { z } from 'zod';
import { AlbumScalarWhereInputObjectSchema } from './AlbumScalarWhereInput.schema';
import { AlbumUpdateManyMutationInputObjectSchema } from './AlbumUpdateManyMutationInput.schema';
import { AlbumUncheckedUpdateManyWithoutAlbumsInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateManyWithWhereWithoutMusicsInput> = z
  .object({
    where: z.lazy(() => AlbumScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => AlbumUpdateManyMutationInputObjectSchema),
      z.lazy(() => AlbumUncheckedUpdateManyWithoutAlbumsInputObjectSchema),
    ]),
  })
  .strict();

export const AlbumUpdateManyWithWhereWithoutMusicsInputObjectSchema = Schema;
