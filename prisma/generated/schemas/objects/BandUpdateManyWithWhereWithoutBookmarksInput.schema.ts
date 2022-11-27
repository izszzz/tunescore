import { z } from 'zod';
import { BandScalarWhereInputObjectSchema } from './BandScalarWhereInput.schema';
import { BandUpdateManyMutationInputObjectSchema } from './BandUpdateManyMutationInput.schema';
import { BandUncheckedUpdateManyWithoutBookmarkBandsInputObjectSchema } from './BandUncheckedUpdateManyWithoutBookmarkBandsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateManyWithWhereWithoutBookmarksInput> = z
  .object({
    where: z.lazy(() => BandScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => BandUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => BandUncheckedUpdateManyWithoutBookmarkBandsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const BandUpdateManyWithWhereWithoutBookmarksInputObjectSchema = Schema;
