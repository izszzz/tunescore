import { z } from 'zod';
import { MusicScalarWhereInputObjectSchema } from './MusicScalarWhereInput.schema';
import { MusicUpdateManyMutationInputObjectSchema } from './MusicUpdateManyMutationInput.schema';
import { MusicUncheckedUpdateManyWithoutComposedMusicsInputObjectSchema } from './MusicUncheckedUpdateManyWithoutComposedMusicsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateManyWithWhereWithoutComposersInput> =
  z
    .object({
      where: z.lazy(() => MusicScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MusicUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => MusicUncheckedUpdateManyWithoutComposedMusicsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MusicUpdateManyWithWhereWithoutComposersInputObjectSchema = Schema;
