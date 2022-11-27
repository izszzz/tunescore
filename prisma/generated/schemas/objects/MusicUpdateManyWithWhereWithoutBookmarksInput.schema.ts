import { z } from 'zod';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';
import { MusicUpdateManyMutationInputObjectSchema } from './MusicUpdateManyMutationInput.schema';
import { MusicUncheckedUpdateManyWithoutBookmarkMusicsInputObjectSchema } from './MusicUncheckedUpdateManyWithoutBookmarkMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithWhereWithoutBookmarksInput> =
  z
    .object({
      where: z.lazy(() => MusicScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MusicUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => MusicUncheckedUpdateManyWithoutBookmarkMusicsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MusicUpdateManyWithWhereWithoutBookmarksInputObjectSchema = Schema;
