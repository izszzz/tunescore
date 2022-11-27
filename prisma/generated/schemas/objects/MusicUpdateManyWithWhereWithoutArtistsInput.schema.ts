import { z } from 'zod';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';
import { MusicUpdateManyMutationInputObjectSchema } from './MusicUpdateManyMutationInput.schema';
import { MusicUncheckedUpdateManyWithoutMusicsInputObjectSchema } from './MusicUncheckedUpdateManyWithoutMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithWhereWithoutArtistsInput> = z
  .object({
    where: z.lazy(() => MusicScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MusicUpdateManyMutationInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateManyWithoutMusicsInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpdateManyWithWhereWithoutArtistsInputObjectSchema = Schema;
