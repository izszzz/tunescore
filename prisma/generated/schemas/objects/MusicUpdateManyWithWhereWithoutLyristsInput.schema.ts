import { z } from 'zod';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';
import { MusicUpdateManyMutationInputObjectSchema } from './MusicUpdateManyMutationInput.schema';
import { MusicUncheckedUpdateManyWithoutWrittenMusicsInputObjectSchema } from './MusicUncheckedUpdateManyWithoutWrittenMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithWhereWithoutLyristsInput> = z
  .object({
    where: z.lazy(() => MusicScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => MusicUpdateManyMutationInputObjectSchema),
      z.lazy(
        () => MusicUncheckedUpdateManyWithoutWrittenMusicsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const MusicUpdateManyWithWhereWithoutLyristsInputObjectSchema = Schema;
