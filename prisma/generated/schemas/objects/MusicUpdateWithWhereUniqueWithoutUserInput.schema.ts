import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutUserInputObjectSchema } from './MusicUpdateWithoutUserInput.schema';
import { MusicUncheckedUpdateWithoutUserInputObjectSchema } from './MusicUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => MusicUpdateWithoutUserInputObjectSchema),
      z.lazy(() => MusicUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const MusicUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
