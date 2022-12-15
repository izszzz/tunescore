import { z } from 'zod';
import { AlbumScalarWhereInputObjectSchema } from './AlbumScalarWhereInput.schema';
import { AlbumUpdateManyMutationInputObjectSchema } from './AlbumUpdateManyMutationInput.schema';
import { AlbumUncheckedUpdateManyWithoutBookmarkAlbumsInputObjectSchema } from './AlbumUncheckedUpdateManyWithoutBookmarkAlbumsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AlbumUpdateManyWithWhereWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => AlbumScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => AlbumUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => AlbumUncheckedUpdateManyWithoutBookmarkAlbumsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const AlbumUpdateManyWithWhereWithoutBookmarksInputObjectSchema = Schema;
