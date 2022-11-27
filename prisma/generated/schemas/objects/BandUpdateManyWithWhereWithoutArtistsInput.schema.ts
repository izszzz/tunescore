import { z } from 'zod';
import { BandScalarWhereInputObjectSchema } from './BandScalarWhereInput.schema';
import { BandUpdateManyMutationInputObjectSchema } from './BandUpdateManyMutationInput.schema';
import { BandUncheckedUpdateManyWithoutBandsInputObjectSchema } from './BandUncheckedUpdateManyWithoutBandsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BandUpdateManyWithWhereWithoutArtistsInput> = z
  .object({
    where: z.lazy(() => BandScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => BandUpdateManyMutationInputObjectSchema),
      z.lazy(() => BandUncheckedUpdateManyWithoutBandsInputObjectSchema),
    ]),
  })
  .strict();

export const BandUpdateManyWithWhereWithoutArtistsInputObjectSchema = Schema;
