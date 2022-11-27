import { z } from 'zod';
import { MusicWhereUniqueInputObjectSchema } from './MusicWhereUniqueInput.schema';
import { MusicUpdateWithoutComposersInputObjectSchema } from './MusicUpdateWithoutComposersInput.schema';
import { MusicUncheckedUpdateWithoutComposersInputObjectSchema } from './MusicUncheckedUpdateWithoutComposersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MusicUpdateWithWhereUniqueWithoutComposersInput> =
  z
    .object({
      where: z.lazy(() => MusicWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MusicUpdateWithoutComposersInputObjectSchema),
        z.lazy(() => MusicUncheckedUpdateWithoutComposersInputObjectSchema),
      ]),
    })
    .strict();

export const MusicUpdateWithWhereUniqueWithoutComposersInputObjectSchema =
  Schema;
